import { FC, ReactNode } from "react";

export const Body: FC<{ children: ReactNode; noBG?: boolean }> = ({
  children,
  noBG = false,
}) => {
  return <main className={`pt-8 ${!noBG && "bg-gray-700"}`}>{children}</main>;
};
