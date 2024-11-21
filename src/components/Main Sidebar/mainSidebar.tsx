import { useEffect, useRef } from "react";
import Accordion from "../accordion";

interface MainSidebarProps {
  isSidebarOpen: boolean;
  handleSidebarClick: () => void;
  smallSidebarRef: React.RefObject<HTMLDivElement>;
  activeButtons: string[];
  setActiveButtons: (buttons: string[]) => void;
}

const MainSidebar: React.FC<MainSidebarProps> = ({
  isSidebarOpen,
  handleSidebarClick,
  smallSidebarRef,
  activeButtons,
  setActiveButtons,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("Click outside detected:", event.target);

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        smallSidebarRef.current &&
        !smallSidebarRef.current.contains(event.target as Node)
      ) {
        console.log("Click is outside both sidebars, closing MainSidebar");
        handleSidebarClick();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      console.log("Sidebar is not open, no need to listen for clicks outside.");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, handleSidebarClick, smallSidebarRef]);

  return (
    <div
      ref={sidebarRef}
      className={`absolute left-[0px] top-[-16px] h-[100vh] bg-white shadow-lg w-[370px] transition-transform duration-500 ease-in-out z-10 ${
        isSidebarOpen
          ? "transform translate-x-0"
          : "transform -translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-[30px] h-full pl-[100px] pr-[20px] pt-[38px]">
        <h2 className="font-[700] text-[16px] text-[#8A4194]">Menu</h2>
        <Accordion
          activeButtons={activeButtons}
          setActiveButtons={setActiveButtons}
        />
      </div>
    </div>
  );
};

export default MainSidebar;
