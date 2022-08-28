import { FC, ReactNode } from "react";

import { Title } from "./Title";

export const Card: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="rounded-lg w-72 bg-gradient-to-tl from-primary-600 to-primary-700  p-8 flex-shrink-0">
      <Title text={title} small />
      {children}
    </div>
  );
};
