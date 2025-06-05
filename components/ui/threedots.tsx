import React from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

export const ThreeDots: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[80px] h-[52px] bg-[#B4B4B4] flex my-5 mx-5 rounded-[45%]"
      )}
    >
      <div className={cn("m-auto")}>
        <svg
          fill="#000000"
          height="48px"
          width="48px"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            className="cls-1"
            d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"
          />
        </svg>
      </div>
    </div>
  );
};
