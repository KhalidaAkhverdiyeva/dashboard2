import Accordion from "../hello";

const MainSidebar = ({ isSidebarOpen, handleSidebarClick }) => {
  return (
    <div
      className={`absolute  left-0 top-[-16px]  h-[880px] bg-white shadow-lg w-[370px] transition-transform duration-500 ease-in-out z-10 ${
        isSidebarOpen
          ? "transform translate-x-0  "
          : "transform -translate-x-full "
      }`}
    >
      <div className="flex flex-col gap-[30px] h-full pl-[100px] pr-[20px] pt-[38px]">
        <h2 className="font-[700] text-[16px] text-[#8A4194]">Menu</h2>

        <Accordion />
      </div>
    </div>
  );
};

export default MainSidebar;
