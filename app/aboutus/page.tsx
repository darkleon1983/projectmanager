import React from "react";
import cn from "classnames";
import { Container } from "../../components/shared/container";

interface Props {
  className?: string;
}

export default function AboutUs({ className }: Props) {
  return (
    <Container className={cn("mx-5", className)}>
      <div className={cn("text-red-600")}>Page about us</div>
    </Container>
  );
}
