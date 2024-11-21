import { useState } from "react";
import { Link } from "react-router-dom";

interface AccordionProps {
  activeButtons: string[];
  setActiveButtons: (buttons: string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  activeButtons,
  setActiveButtons,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      const newIndexes = prevIndexes.includes(index)
        ? prevIndexes.filter((item) => item !== index)
        : [...prevIndexes, index];

      if (newIndexes.includes(index)) {
        setActiveButtons([...activeButtons, `button${index + 1}`]);
      } else {
        setActiveButtons(
          activeButtons.filter((item) => item !== `button${index + 1}`)
        );
      }

      return newIndexes;
    });
  };

  const isActive = (itemId: number) => {
    return (
      openIndexes.includes(itemId) ||
      activeButtons.includes(`button${itemId + 1}`)
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={` flex flex-col gap-[10px]  transition-all duration-500 ease-in-out `}
      >
        <div
          className={`flex w-full h-[40px] items-center justify-between transition-all  ease-in-out px-[25px] rounded-[6px] ${
            isActive(0) ? "bg-[#8A4194]" : "bg-transparent"
          } cursor-pointer`}
          onClick={() => toggleItem(0)}
        >
          <div className="flex gap-[10px] items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`transition-all  ease-in-out ${
                isActive(0) ? "stroke-white " : "stroke-black "
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_768_3)">
                <path
                  d="M15.7535 1.25H10.9516C10.8023 1.24989 10.659 1.30888 10.5531 1.41406L0.953127 11.0117C0.742976 11.2229 0.625 11.5087 0.625 11.8066C0.625 12.1046 0.742976 12.3904 0.953127 12.6016L5.52344 17.1719C5.73469 17.3821 6.02056 17.5 6.31856 17.5C6.61655 17.5 6.90242 17.3821 7.11367 17.1719L16.7109 7.57813C16.8161 7.47221 16.8751 7.32896 16.875 7.17969V2.375C16.8757 2.22736 16.8472 2.08103 16.7912 1.94444C16.7351 1.80786 16.6526 1.68371 16.5484 1.57914C16.4441 1.47458 16.3202 1.39167 16.1838 1.33518C16.0474 1.27869 15.9012 1.24974 15.7535 1.25Z"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M13.75 5.625C13.5028 5.625 13.2611 5.55169 13.0555 5.41434C12.85 5.27699 12.6898 5.08176 12.5952 4.85336C12.5005 4.62495 12.4758 4.37361 12.524 4.13114C12.5723 3.88866 12.6913 3.66593 12.8661 3.49112C13.0409 3.3163 13.2637 3.19725 13.5061 3.14902C13.7486 3.10079 13.9999 3.12554 14.2284 3.22015C14.4568 3.31476 14.652 3.47498 14.7893 3.68054C14.9267 3.8861 15 4.12777 15 4.375C15 4.70652 14.8683 5.02446 14.6339 5.25888C14.3995 5.4933 14.0815 5.625 13.75 5.625Z" />
                <path
                  d="M8.98438 18.75L19.2188 8.51562C19.2697 8.46431 19.3097 8.40329 19.3366 8.33619C19.3634 8.26908 19.3765 8.19726 19.375 8.125V3.125"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_768_3">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span
              className={`font-[500] transition-all   ease-in-out ${
                isActive(0) ? "text-white" : "text-black"
              }`}
            >
              Sales
            </span>
          </div>
          <div className="relative flex justify-center items-center w-6 h-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[5px] left-[5px] transition-opacity ease-in-out  ${
                isActive(0) ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734783 8 0.480429 7.89464 0.292892 7.70711C0.105356 7.51957 0 7.26522 0 7C0 6.73478 0.105356 6.48043 0.292892 6.29289C0.480429 6.10536 0.734783 6 1 6H6V1Z"
                fill="#A8A8A8"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 transition-opacity ease-in-out  ${
                isActive(0) ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                width="24"
                height="24"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#AA74B1"
              />
              <path
                d="M6 12L18 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
            isActive(0) ? "max-h-[200px] " : "max-h-0 "
          }`}
        >
          <ul className="ml-[30px] flex flex-col gap-[5px] font-[400] pl-[10px] border-l-[1px] border-l-solid border-l-[#8A4194]">
            <Link to="/application-data-sales">
              <li className="h-[30px] cursor-pointer">Application data</li>
            </Link>

            <li className="h-[30px] cursor-pointer">Lead Details</li>
          </ul>
        </div>
      </div>
      <div
        className={` flex flex-col gap-[10px]  transition-all duration-500 ease-in-out `}
      >
        <div
          className={`flex w-full bg-[#8A4194] h-[40px] items-center justify-between transition-all   ease-in-out px-[25px] rounded-[6px] ${
            isActive(1) ? "bg-[#8A4194]" : "bg-transparent"
          } cursor-pointer`}
          onClick={() => toggleItem(1)}
        >
          <div className="flex gap-[10px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all  ease-in-out ${
                isActive(1) ? "fill-white " : "fill-black "
              }`}
            >
              <path d="M5.116 20C4.65533 20 4.271 19.846 3.963 19.538C3.655 19.23 3.50067 18.8453 3.5 18.384V3H4.5V18.385C4.5 18.5383 4.564 18.6793 4.692 18.808C4.82 18.9367 4.961 19.0007 5.115 19H20.5V20H5.116ZM7.385 16.5V9.192H9.385V16.5H7.385ZM11.885 16.5V4.192H13.885V16.5H11.885ZM16.385 16.5V13.192H18.385V16.5H16.385Z" />
            </svg>

            <span
              className={`font-[500] transition-all   ease-in-out ${
                isActive(1) ? "text-white" : "text-black"
              }`}
            >
              Finance
            </span>
          </div>
          <div className="relative flex justify-center items-center w-6 h-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[5px] left-[5px] transition-opacity ease-in-out  ${
                isActive(1) ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734783 8 0.480429 7.89464 0.292892 7.70711C0.105356 7.51957 0 7.26522 0 7C0 6.73478 0.105356 6.48043 0.292892 6.29289C0.480429 6.10536 0.734783 6 1 6H6V1Z"
                fill="#A8A8A8"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 transition-opacity ease-in-out  ${
                isActive(1) ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                width="24"
                height="24"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#AA74B1"
              />
              <path
                d="M6 12L18 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
            isActive(1) ? "max-h-[200px] " : "max-h-0 "
          }`}
        >
          <ul className="ml-[30px] flex flex-col gap-[5px] font-[400] pl-[10px] border-l-[1px] border-l-solid border-l-[#8A4194]">
            <li className="h-[30px] cursor-pointer">Raw Data</li>
            <li className="h-[30px] cursor-pointer">Report</li>
          </ul>
        </div>
      </div>

      <div
        className={` flex flex-col gap-[10px]  transition-all duration-500 ease-in-out `}
      >
        <div
          className={`flex w-full bg-[#8A4194] h-[40px] items-center justify-between transition-all   ease-in-out px-[25px] rounded-[6px] ${
            isActive(2) ? "bg-[#8A4194]" : "bg-transparent"
          } cursor-pointer`}
          onClick={() => toggleItem(2)}
        >
          <div className="flex gap-[10px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all  ease-in-out ${
                isActive(2) ? "fill-white " : "fill-black "
              }`}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3V17H14.1935V16H4V4H17.5V5.06H18.5V3H3ZM18.5 8C18.5 8.26522 18.3946 8.51957 18.2071 8.70711C18.0196 8.89464 17.7652 9 17.5 9C17.2348 9 16.9804 8.89464 16.7929 8.70711C16.6054 8.51957 16.5 8.26522 16.5 8C16.5 7.73478 16.6054 7.48043 16.7929 7.29289C16.9804 7.10536 17.2348 7 17.5 7C17.7652 7 18.0196 7.10536 18.2071 7.29289C18.3946 7.48043 18.5 7.73478 18.5 8ZM19.5 8C19.5 8.53043 19.2893 9.03914 18.9142 9.41421C18.5391 9.78929 18.0304 10 17.5 10C16.9696 10 16.4609 9.78929 16.0858 9.41421C15.7107 9.03914 15.5 8.53043 15.5 8C15.5 7.46957 15.7107 6.96086 16.0858 6.58579C16.4609 6.21071 16.9696 6 17.5 6C18.0304 6 18.5391 6.21071 18.9142 6.58579C19.2893 6.96086 19.5 7.46957 19.5 8Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0465 10.915C15.3253 10.6488 15.696 10.5002 16.0815 10.5H18.1225C18.8545 10.5 19.536 10.749 20.061 11.245C20.566 11.722 20.829 12.3335 20.9365 12.913C21.1055 13.824 20.9305 14.8195 20.5 15.702V19.75C20.5 20.0637 20.3821 20.3659 20.1696 20.5967C19.9571 20.8275 19.6657 20.9699 19.3531 20.9958C19.0405 21.0217 18.7295 20.9291 18.482 20.7363C18.2345 20.5436 18.0685 20.2649 18.017 19.9555L17.75 18.3535L17.483 19.9555C17.4314 20.2649 17.2654 20.5436 17.0179 20.7363C16.7704 20.9291 16.4595 21.0217 16.1469 20.9958C15.8343 20.9699 15.5428 20.8275 15.3303 20.5967C15.1179 20.3659 15 20.0637 15 19.75V15.0465C14.7719 15.1782 14.5133 15.2475 14.25 15.2475H11.699C11.3011 15.2475 10.9196 15.0895 10.6383 14.8082C10.357 14.5269 10.199 14.1453 10.199 13.7475C10.199 13.3497 10.357 12.9681 10.6383 12.6868C10.9196 12.4055 11.3011 12.2475 11.699 12.2475H13.649L15.0465 10.915ZM16 16.7375V19.75C16.0001 19.8126 16.0238 19.8729 16.0663 19.9189C16.1088 19.9649 16.167 19.9933 16.2294 19.9985C16.2918 20.0036 16.3539 19.9852 16.4033 19.9467C16.4528 19.9083 16.486 19.8527 16.4965 19.791L17.018 16.663C17.0374 16.5462 17.0976 16.4402 17.1879 16.3636C17.2781 16.2871 17.3926 16.2451 17.511 16.245H17.989C18.1073 16.2451 18.2218 16.2871 18.3121 16.3636C18.4024 16.4402 18.4626 16.5462 18.482 16.663L19.0035 19.791C19.0139 19.8527 19.0472 19.9083 19.0966 19.9467C19.1461 19.9852 19.2081 20.0036 19.2705 19.9985C19.333 19.9933 19.3912 19.9649 19.4337 19.9189C19.4761 19.8729 19.4998 19.8126 19.5 19.75V15.5835C19.5 15.5035 19.5192 15.4246 19.556 15.3535C19.942 14.608 20.0825 13.7915 19.9535 13.0955C19.875 12.6725 19.6915 12.2715 19.3745 11.972C19.051 11.6665 18.622 11.5 18.1225 11.5H16.082C15.9535 11.5 15.8295 11.5495 15.7365 11.638L14.1945 13.109C14.1015 13.1978 13.978 13.2474 13.8495 13.2475H11.699C11.5664 13.2475 11.4392 13.3002 11.3454 13.3939C11.2517 13.4877 11.199 13.6149 11.199 13.7475C11.199 13.8801 11.2517 14.0073 11.3454 14.1011C11.4392 14.1948 11.5664 14.2475 11.699 14.2475H14.25C14.3785 14.2474 14.502 14.1978 14.595 14.109L15.155 13.575C15.2258 13.5075 15.3149 13.4622 15.4113 13.4448C15.5076 13.4275 15.6069 13.4388 15.6969 13.4773C15.7868 13.5158 15.8635 13.58 15.9174 13.6617C15.9713 13.7434 16 13.8391 16 13.937V16.7375Z"
              />
            </svg>

            <span
              className={`font-[500] transition-all   ease-in-out ${
                isActive(2) ? "text-white" : "text-black"
              }`}
            >
              Training
            </span>
          </div>
          <div className="relative flex justify-center items-center w-6 h-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[5px] left-[5px] transition-opacity ease-in-out  ${
                isActive(2) ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734783 8 0.480429 7.89464 0.292892 7.70711C0.105356 7.51957 0 7.26522 0 7C0 6.73478 0.105356 6.48043 0.292892 6.29289C0.480429 6.10536 0.734783 6 1 6H6V1Z"
                fill="#A8A8A8"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 transition-opacity ease-in-out  ${
                isActive(2) ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                width="24"
                height="24"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#AA74B1"
              />
              <path
                d="M6 12L18 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
            isActive(2) ? "max-h-[200px] " : "max-h-0 "
          }`}
        >
          <ul className="ml-[30px] flex flex-col gap-[5px] font-[400] pl-[10px] border-l-[1px] border-l-solid border-l-[#8A4194]">
            <li className="h-[30px] cursor-pointer">Tracker</li>
            <li className="h-[30px]  cursor-pointer">Checklist</li>
            <li className="h-[30px] cursor-pointer">Report</li>
          </ul>
        </div>
      </div>
      <div
        className={` flex flex-col gap-[10px]  transition-all duration-500 ease-in-out `}
      >
        <div
          className={`flex w-full bg-[#8A4194] h-[40px] items-center justify-between transition-all   ease-in-out px-[25px] rounded-[6px] ${
            isActive(3) ? "bg-[#8A4194]" : "bg-transparent"
          } cursor-pointer`}
          onClick={() => toggleItem(3)}
        >
          <div className="flex gap-[10px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-all  ease-in-out ${
                isActive(3) ? "stroke-white " : "stroke-black "
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22L10 16H2L4 22H12ZM12 22H16M12 13V12.5C12 10.614 12 9.672 11.414 9.086C10.828 8.5 9.886 8.5 8 8.5C6.114 8.5 5.172 8.5 4.586 9.086C4 9.672 4 10.614 4 12.5V13M14 17.5H20C20.5304 17.5 21.0391 17.7107 21.4142 18.0858C21.7893 18.4609 22 18.9696 22 19.5V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H19M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15C16.4696 15 15.9609 14.7893 15.5858 14.4142C15.2107 14.0391 15 13.5304 15 13C15 12.4696 15.2107 11.9609 15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11C17.5304 11 18.0391 11.2107 18.4142 11.5858C18.7893 11.9609 19 12.4696 19 13ZM10 4C10 4.53043 9.78929 5.03914 9.41421 5.41421C9.03914 5.78929 8.53043 6 8 6C7.46957 6 6.96086 5.78929 6.58579 5.41421C6.21071 5.03914 6 4.53043 6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              className={`font-[500] transition-all   ease-in-out ${
                isActive(3) ? "text-white" : "text-black"
              }`}
            >
              Internship
            </span>
          </div>
          <div className="relative flex justify-center items-center w-6 h-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[5px] left-[5px] transition-opacity ease-in-out  ${
                isActive(3) ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734783 8 0.480429 7.89464 0.292892 7.70711C0.105356 7.51957 0 7.26522 0 7C0 6.73478 0.105356 6.48043 0.292892 6.29289C0.480429 6.10536 0.734783 6 1 6H6V1Z"
                fill="#A8A8A8"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 transition-opacity ease-in-out  ${
                isActive(3) ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                width="24"
                height="24"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#AA74B1"
              />
              <path
                d="M6 12L18 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
            isActive(3) ? "max-h-[200px] " : "max-h-0 "
          }`}
        >
          <ul className="ml-[30px] flex flex-col gap-[5px] font-[400] pl-[10px] border-l-[1px] border-l-solid border-l-[#8A4194]">
            <li className="h-[30px] cursor-pointer">Interns Situation</li>
            <li className="h-[30px] cursor-pointer">Daily dataset</li>
          </ul>
        </div>
      </div>
      <div
        className={` flex flex-col gap-[10px]  transition-all duration-500 ease-in-out `}
      >
        <div
          className={`flex w-full bg-[#8A4194] h-[40px] items-center justify-between transition-all   ease-in-out px-[25px] rounded-[6px] ${
            isActive(4) ? "bg-[#8A4194]" : "bg-transparent"
          } cursor-pointer`}
          onClick={() => toggleItem(4)}
        >
          <div className="flex gap-[10px] items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all  ease-in-out ${
                isActive(4) ? "fill-white " : "fill-black "
              }`}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 10C11.7625 10 14 7.7625 14 5C14 2.2375 11.7625 0 9 0C6.2375 0 4 2.2375 4 5C4 7.7625 6.2375 10 9 10ZM13 5C13 7.21 11.21 9 9 9C6.79 9 5 7.21 5 5C5 2.79 6.79 1 9 1C11.21 1 13 2.79 13 5ZM11.5175 10.937L10 15.272V15L9.7125 12.9895C9.80428 12.9702 9.88877 12.9254 9.95632 12.8603C10.0239 12.7953 10.0718 12.7125 10.0945 12.6215L10.3445 11.6215C10.363 11.5478 10.3644 11.4709 10.3487 11.3966C10.333 11.3223 10.3005 11.2525 10.2538 11.1926C10.2071 11.1327 10.1474 11.0842 10.0791 11.0508C10.0109 11.0175 9.93596 11.0001 9.86 11H8.141C8.06505 11 7.99011 11.0173 7.92185 11.0507C7.8536 11.084 7.79383 11.1324 7.74708 11.1922C7.70033 11.2521 7.66783 11.3218 7.65205 11.3961C7.63627 11.4704 7.63762 11.5473 7.656 11.621L7.906 12.621C7.92867 12.7121 7.97651 12.795 8.04407 12.8601C8.11162 12.9253 8.19616 12.9701 8.288 12.9895L8.007 14.9555L6.48 10.9315L6.47 10.91C6.39621 10.7585 6.27294 10.6368 6.12057 10.5648C5.96819 10.4929 5.79584 10.4752 5.632 10.5145C5.4615 10.556 5.2735 10.5995 5.075 10.6465C4.6065 10.756 4.078 10.8795 3.577 11.019C2.8705 11.216 2.1385 11.464 1.63 11.798C0.6935 12.413 0 13.2265 0 14.25V18H18V14.25C18 13.2265 17.307 12.4125 16.37 11.798C15.862 11.464 15.13 11.216 14.4235 11.019C13.9268 10.8846 13.4273 10.7604 12.9255 10.6465C12.7396 10.6033 12.554 10.5593 12.3685 10.5145C12.2047 10.4753 12.0325 10.4931 11.8802 10.565C11.728 10.6369 11.6048 10.7586 11.531 10.91L11.5175 10.937ZM12.722 11.626L12.3655 11.542L10.4545 17H17V14.25C17 13.727 16.648 13.1765 15.8215 12.634C15.4545 12.3925 14.8565 12.1775 14.1555 11.9825C13.6804 11.8537 13.2021 11.7349 12.722 11.626ZM5.641 11.5405L7.7125 17H1V14.25C1 13.727 1.352 13.1765 2.1785 12.634C2.5455 12.3925 3.1435 12.1775 3.8445 11.9825C4.31961 11.8536 4.79738 11.7347 5.2775 11.626L5.641 11.5405Z"
              />
            </svg>

            <span
              className={`font-[500] transition-all   ease-in-out ${
                isActive(4) ? "text-white" : "text-black"
              }`}
            >
              Career
            </span>
          </div>
          <div className="relative flex justify-center items-center w-6 h-6">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[5px] left-[5px] transition-opacity ease-in-out  ${
                isActive(4) ? "opacity-0" : "opacity-100"
              }`}
            >
              <path
                d="M6 1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734783 8 0.480429 7.89464 0.292892 7.70711C0.105356 7.51957 0 7.26522 0 7C0 6.73478 0.105356 6.48043 0.292892 6.29289C0.480429 6.10536 0.734783 6 1 6H6V1Z"
                fill="#A8A8A8"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-0 left-0 transition-opacity ease-in-out  ${
                isActive(4) ? "opacity-100" : "opacity-0"
              }`}
            >
              <rect
                width="24"
                height="24"
                rx="12"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#AA74B1"
              />
              <path
                d="M6 12L18 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`accordion-body overflow-hidden transition-all duration-500 ease-in-out ${
            isActive(4) ? "max-h-[200px] " : "max-h-0 "
          }`}
        >
          <ul className="ml-[30px] flex flex-col gap-[5px] font-[400] pl-[10px] border-l-[1px] border-l-solid border-l-[#8A4194]">
            <li className="h-[30px] cursor-pointer">Talent pool</li>
            <li className="h-[30px] cursor-pointer">Vacancies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
