import { FC } from "react";

export const Anchor: FC<{ newTab?: boolean; href: string; text: string }> = ({
  newTab = false,
  href,
  text,
}) => {
  return (
    <a
      style={{ color: "#0000 !important" }}
      className="bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {text}
    </a>
  );
};
