import { FC, ReactNode } from "react";

export const Anchor: FC<{
  newTab?: boolean;
  href: string;
  children: ReactNode;
}> = ({ newTab = false, href, children }) => {
  return (
    <a
      rel="noreferrer"
      style={{ color: "#0000 !important" }}
      className="bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text"
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
};
