import { useState } from "react";
import MainSidebar from "../Main Sidebar/mainSidebar";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };
  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div
        onClick={handleSidebarClick}
        className={`w-[55px] flex flex-col items-center bg-[#F3F4F6] rounded-[6px] h-[860px] mt-4 ml-4  cursor-pointer relative z-20`}
      >
        <div className="flex justify-center mt-[23px] ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5C7 4.46957 6.78929 3.96086 6.41421 3.58579C6.03914 3.21071 5.53043 3 5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7ZM12 7C12.5304 7 13.0391 6.78929 13.4142 6.41421C13.7893 6.03914 14 5.53043 14 5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7ZM19 7C19.5304 7 20.0391 6.78929 20.4142 6.41421C20.7893 6.03914 21 5.53043 21 5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3C18.4696 3 17.9609 3.21071 17.5858 3.58579C17.2107 3.96086 17 4.46957 17 5C17 5.53043 17.2107 6.03914 17.5858 6.41421C17.9609 6.78929 18.4696 7 19 7ZM5 14C5.53043 14 6.03914 13.7893 6.41421 13.4142C6.78929 13.0391 7 12.5304 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14ZM19 14C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10C18.4696 10 17.9609 10.2107 17.5858 10.5858C17.2107 10.9609 17 11.4696 17 12C17 12.5304 17.2107 13.0391 17.5858 13.4142C17.9609 13.7893 18.4696 14 19 14ZM5 21C5.53043 21 6.03914 20.7893 6.41421 20.4142C6.78929 20.0391 7 19.5304 7 19C7 18.4696 6.78929 17.9609 6.41421 17.5858C6.03914 17.2107 5.53043 17 5 17C4.46957 17 3.96086 17.2107 3.58579 17.5858C3.21071 17.9609 3 18.4696 3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21ZM12 21C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19C14 18.4696 13.7893 17.9609 13.4142 17.5858C13.0391 17.2107 12.5304 17 12 17C11.4696 17 10.9609 17.2107 10.5858 17.5858C10.2107 17.9609 10 18.4696 10 19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21ZM19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19C21 18.4696 20.7893 17.9609 20.4142 17.5858C20.0391 17.2107 19.5304 17 19 17C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21Z"
              fill="url(#paint0_linear_525_683)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_525_683"
                x1="12"
                y1="3"
                x2="12"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#751A63" />
                <stop offset="1" stop-color="#A26BCC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-[40px] flex flex-col gap-[10px] items-center mt-[20px] flex-grow">
          <div
            onClick={() => handleClick("button1")}
            className={`w-[40px] group h-[36px] rounded-[6px] flex justify-center items-center cursor-pointer ${
              activeButton === "button1" ? "bg-[#8A4194]" : "bg-transparent"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_717_28)">
                <path
                  d="M15.7535 1.25H10.9516C10.8023 1.24989 10.659 1.30888 10.5531 1.41406L0.953127 11.0117C0.742976 11.2229 0.625 11.5087 0.625 11.8066C0.625 12.1046 0.742976 12.3904 0.953127 12.6016L5.52344 17.1719C5.73469 17.3821 6.02056 17.5 6.31856 17.5C6.61655 17.5 6.90242 17.3821 7.11367 17.1719L16.7109 7.57813C16.8161 7.47221 16.8751 7.32896 16.875 7.17969V2.375C16.8757 2.22736 16.8472 2.08103 16.7912 1.94444C16.7351 1.80786 16.6526 1.68371 16.5484 1.57914C16.4441 1.47458 16.3202 1.39167 16.1838 1.33518C16.0474 1.27869 15.9012 1.24974 15.7535 1.25Z"
                  stroke={activeButton === "button1" ? "#FFFFFF" : "#000000"}
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.75 5.625C13.5028 5.625 13.2611 5.55169 13.0555 5.41434C12.85 5.27699 12.6898 5.08176 12.5952 4.85336C12.5005 4.62495 12.4758 4.37361 12.524 4.13114C12.5723 3.88866 12.6913 3.66593 12.8661 3.49112C13.0409 3.3163 13.2637 3.19725 13.5061 3.14902C13.7486 3.10079 13.9999 3.12554 14.2284 3.22015C14.4568 3.31476 14.652 3.47498 14.7893 3.68054C14.9267 3.8861 15 4.12777 15 4.375C15 4.70652 14.8683 5.02446 14.6339 5.25888C14.3995 5.4933 14.0815 5.625 13.75 5.625Z"
                  fill={activeButton === "button1" ? "#FFFFFF" : "#000000"}
                />
                <path
                  d="M8.98438 18.75L19.2188 8.51562C19.2697 8.46431 19.3097 8.40329 19.3366 8.33619C19.3634 8.26908 19.3765 8.19726 19.375 8.125V3.125"
                  stroke={activeButton === "button1" ? "#FFFFFF" : "#000000"}
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_717_28">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            onClick={() => handleClick("button2")}
            className={`w-[40px] group h-[36px] rounded-[6px] flex justify-center items-center cursor-pointer ${
              activeButton === "button2" ? "bg-[#8A4194]" : "bg-transparent"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.116 20C4.65533 20 4.271 19.846 3.963 19.538C3.655 19.23 3.50067 18.8453 3.5 18.384V3H4.5V18.385C4.5 18.5383 4.564 18.6793 4.692 18.808C4.82 18.9367 4.961 19.0007 5.115 19H20.5V20H5.116ZM7.385 16.5V9.192H9.385V16.5H7.385ZM11.885 16.5V4.192H13.885V16.5H11.885ZM16.385 16.5V13.192H18.385V16.5H16.385Z"
                fill={activeButton === "button2" ? "#FFFFFF" : "#000000"}
              />
            </svg>
          </div>
          <div
            onClick={() => handleClick("button3")}
            className={`w-[40px] group h-[36px] rounded-[6px] flex justify-center items-center cursor-pointer ${
              activeButton === "button3" ? "bg-[#8A4194]" : "bg-transparent"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3V17H14.1935V16H4V4H17.5V5.06H18.5V3H3ZM18.5 8C18.5 8.26522 18.3946 8.51957 18.2071 8.70711C18.0196 8.89464 17.7652 9 17.5 9C17.2348 9 16.9804 8.89464 16.7929 8.70711C16.6054 8.51957 16.5 8.26522 16.5 8C16.5 7.73478 16.6054 7.48043 16.7929 7.29289C16.9804 7.10536 17.2348 7 17.5 7C17.7652 7 18.0196 7.10536 18.2071 7.29289C18.3946 7.48043 18.5 7.73478 18.5 8ZM19.5 8C19.5 8.53043 19.2893 9.03914 18.9142 9.41421C18.5391 9.78929 18.0304 10 17.5 10C16.9696 10 16.4609 9.78929 16.0858 9.41421C15.7107 9.03914 15.5 8.53043 15.5 8C15.5 7.46957 15.7107 6.96086 16.0858 6.58579C16.4609 6.21071 16.9696 6 17.5 6C18.0304 6 18.5391 6.21071 18.9142 6.58579C19.2893 6.96086 19.5 7.46957 19.5 8Z"
                fill={activeButton === "button3" ? "#FFFFFF" : "#000000"}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0465 10.915C15.3253 10.6488 15.696 10.5002 16.0815 10.5H18.1225C18.8545 10.5 19.536 10.749 20.061 11.245C20.566 11.722 20.829 12.3335 20.9365 12.913C21.1055 13.824 20.9305 14.8195 20.5 15.702V19.75C20.5 20.0637 20.3821 20.3659 20.1696 20.5967C19.9571 20.8275 19.6657 20.9699 19.3531 20.9958C19.0405 21.0217 18.7295 20.9291 18.482 20.7363C18.2345 20.5436 18.0685 20.2649 18.017 19.9555L17.75 18.3535L17.483 19.9555C17.4314 20.2649 17.2654 20.5436 17.0179 20.7363C16.7704 20.9291 16.4595 21.0217 16.1469 20.9958C15.8343 20.9699 15.5428 20.8275 15.3303 20.5967C15.1179 20.3659 15 20.0637 15 19.75V15.0465C14.7719 15.1782 14.5133 15.2475 14.25 15.2475H11.699C11.3011 15.2475 10.9196 15.0895 10.6383 14.8082C10.357 14.5269 10.199 14.1453 10.199 13.7475C10.199 13.3497 10.357 12.9681 10.6383 12.6868C10.9196 12.4055 11.3011 12.2475 11.699 12.2475H13.649L15.0465 10.915ZM16 16.7375V19.75C16.0001 19.8126 16.0238 19.8729 16.0663 19.9189C16.1088 19.9649 16.167 19.9933 16.2294 19.9985C16.2918 20.0036 16.3539 19.9852 16.4033 19.9467C16.4528 19.9083 16.486 19.8527 16.4965 19.791L17.018 16.663C17.0374 16.5462 17.0976 16.4402 17.1879 16.3636C17.2781 16.2871 17.3926 16.2451 17.511 16.245H17.989C18.1073 16.2451 18.2218 16.2871 18.3121 16.3636C18.4024 16.4402 18.4626 16.5462 18.482 16.663L19.0035 19.791C19.0139 19.8527 19.0472 19.9083 19.0966 19.9467C19.1461 19.9852 19.2081 20.0036 19.2705 19.9985C19.333 19.9933 19.3912 19.9649 19.4337 19.9189C19.4761 19.8729 19.4998 19.8126 19.5 19.75V15.5835C19.5 15.5035 19.5192 15.4246 19.556 15.3535C19.942 14.608 20.0825 13.7915 19.9535 13.0955C19.875 12.6725 19.6915 12.2715 19.3745 11.972C19.051 11.6665 18.622 11.5 18.1225 11.5H16.082C15.9535 11.5 15.8295 11.5495 15.7365 11.638L14.1945 13.109C14.1015 13.1978 13.978 13.2474 13.8495 13.2475H11.699C11.5664 13.2475 11.4392 13.3002 11.3454 13.3939C11.2517 13.4877 11.199 13.6149 11.199 13.7475C11.199 13.8801 11.2517 14.0073 11.3454 14.1011C11.4392 14.1948 11.5664 14.2475 11.699 14.2475H14.25C14.3785 14.2474 14.502 14.1978 14.595 14.109L15.155 13.575C15.2258 13.5075 15.3149 13.4622 15.4113 13.4448C15.5076 13.4275 15.6069 13.4388 15.6969 13.4773C15.7868 13.5158 15.8635 13.58 15.9174 13.6617C15.9713 13.7434 16 13.8391 16 13.937V16.7375Z"
                fill={activeButton === "button3" ? "#FFFFFF" : "#000000"}
              />
            </svg>
          </div>
          <div
            onClick={() => handleClick("button4")}
            className={`w-[40px] group h-[36px] rounded-[6px] flex justify-center items-center cursor-pointer ${
              activeButton === "button4" ? "bg-[#8A4194]" : "bg-transparent"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22L10 16H2L4 22H12ZM12 22H16M12 13V12.5C12 10.614 12 9.672 11.414 9.086C10.828 8.5 9.886 8.5 8 8.5C6.114 8.5 5.172 8.5 4.586 9.086C4 9.672 4 10.614 4 12.5V13M14 17.5H20C20.5304 17.5 21.0391 17.7107 21.4142 18.0858C21.7893 18.4609 22 18.9696 22 19.5V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H19M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15C16.4696 15 15.9609 14.7893 15.5858 14.4142C15.2107 14.0391 15 13.5304 15 13C15 12.4696 15.2107 11.9609 15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11C17.5304 11 18.0391 11.2107 18.4142 11.5858C18.7893 11.9609 19 12.4696 19 13ZM10 4C10 4.53043 9.78929 5.03914 9.41421 5.41421C9.03914 5.78929 8.53043 6 8 6C7.46957 6 6.96086 5.78929 6.58579 5.41421C6.21071 5.03914 6 4.53043 6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4Z"
                stroke={activeButton === "button4" ? "#FFFFFF" : "#000000"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            onClick={() => handleClick("button5")}
            className={`w-[40px] group h-[36px] rounded-[6px] flex justify-center items-center cursor-pointer ${
              activeButton === "button5" ? "bg-[#8A4194]" : "bg-transparent"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 10C11.7625 10 14 7.7625 14 5C14 2.2375 11.7625 0 9 0C6.2375 0 4 2.2375 4 5C4 7.7625 6.2375 10 9 10ZM13 5C13 7.21 11.21 9 9 9C6.79 9 5 7.21 5 5C5 2.79 6.79 1 9 1C11.21 1 13 2.79 13 5ZM11.5175 10.937L10 15.272V15L9.7125 12.9895C9.80428 12.9702 9.88877 12.9254 9.95632 12.8603C10.0239 12.7953 10.0718 12.7125 10.0945 12.6215L10.3445 11.6215C10.363 11.5478 10.3644 11.4709 10.3487 11.3966C10.333 11.3223 10.3005 11.2525 10.2538 11.1926C10.2071 11.1327 10.1474 11.0842 10.0791 11.0508C10.0109 11.0175 9.93596 11.0001 9.86 11H8.141C8.06505 11 7.99011 11.0173 7.92185 11.0507C7.8536 11.084 7.79383 11.1324 7.74708 11.1922C7.70033 11.2521 7.66783 11.3218 7.65205 11.3961C7.63627 11.4704 7.63762 11.5473 7.656 11.621L7.906 12.621C7.92867 12.7121 7.97651 12.795 8.04407 12.8601C8.11162 12.9253 8.19616 12.9701 8.288 12.9895L8.007 14.9555L6.48 10.9315L6.47 10.91C6.39621 10.7585 6.27294 10.6368 6.12057 10.5648C5.96819 10.4929 5.79584 10.4752 5.632 10.5145C5.4615 10.556 5.2735 10.5995 5.075 10.6465C4.6065 10.756 4.078 10.8795 3.577 11.019C2.8705 11.216 2.1385 11.464 1.63 11.798C0.6935 12.413 0 13.2265 0 14.25V18H18V14.25C18 13.2265 17.307 12.4125 16.37 11.798C15.862 11.464 15.13 11.216 14.4235 11.019C13.9268 10.8846 13.4273 10.7604 12.9255 10.6465C12.7396 10.6033 12.554 10.5593 12.3685 10.5145C12.2047 10.4753 12.0325 10.4931 11.8802 10.565C11.728 10.6369 11.6048 10.7586 11.531 10.91L11.5175 10.937ZM12.722 11.626L12.3655 11.542L10.4545 17H17V14.25C17 13.727 16.648 13.1765 15.8215 12.634C15.4545 12.3925 14.8565 12.1775 14.1555 11.9825C13.6804 11.8537 13.2021 11.7349 12.722 11.626ZM5.641 11.5405L7.7125 17H1V14.25C1 13.727 1.352 13.1765 2.1785 12.634C2.5455 12.3925 3.1435 12.1775 3.8445 11.9825C4.31961 11.8536 4.79738 11.7347 5.2775 11.626L5.641 11.5405Z"
                fill={activeButton === "button5" ? "#FFFFFF" : "#000000"}
              />
            </svg>
          </div>
        </div>

        <div className="mt-auto mb-[20px]">
          <img
            src="/icons/Ellipse 1.png"
            alt="image"
            className="w-[44px] h-[44px]"
          />
        </div>
      </div>
      <MainSidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarClick={handleSidebarClick}
      />
    </div>
  );
};

export default Sidebar;
