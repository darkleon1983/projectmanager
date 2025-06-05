import React from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

export const PlusButton: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[52px] h-[52px]  my-5 mx-5 rounded-[50%] bg-[#B4B4B4] flex",
        className
      )}
    >
      <div className={cn("m-auto")}>
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12H15"
            stroke="#323232"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 9L12 15"
            stroke="#323232"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
