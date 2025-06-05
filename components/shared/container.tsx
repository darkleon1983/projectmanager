import React, { PropsWithChildren } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={cn("w-full ", className)}>{children}</div>;
};
