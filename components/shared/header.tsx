import React from "react";
import cn from "classnames";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "../ui";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header>
      <Container
        className={cn("w-full grid grid-cols-5 gap-4 bg-[#FFD100] h-[95px]")}
      >
        <Link href="/" className={cn("justify-self-start mx-[25] my-[25] ")}>
          <img src="logo.svg" alt="Weber" width={157} height={59} />
        </Link>
        <Link
          href="/aboutus"
          className={cn(
            "justify-self-start mx-[25] my-[25] text-3xl hover:text-gray-400"
          )}
        >
          About us
        </Link>
        <Link
          href="/contacts"
          className={cn(
            "justify-self-start mx-[25] my-[25] text-3xl hover:text-gray-400"
          )}
        >
          Contacts
        </Link>
        <Link
          href="/projectregister"
          className={cn(
            "justify-self-start mx-[25] my-[25] text-3xl hover:text-gray-400"
          )}
        >
          Project Register
        </Link>
        {/* <Button
          className={cn(
            "justify-self-end mx-[10] my-[10] text-3xl rounded-[35] shadow-gray-700 shadow-lg"
          )}
        >
          Log in
        </Button> */}
      </Container>
    </header>
  );
};
