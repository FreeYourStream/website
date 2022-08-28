import { FC, ReactNode } from "react";

import { Title } from "./Title";

export const Main: FC<{
  children: ReactNode;
  title?: string;
  color?: string;
}> = ({ children, title, color = "bg-gray-900" }) => {
  return (
    <main
      className={`border-b-2 border-primary-800 flex flex-col justify-center items-center pb-16 px-8 ${color}`}
    >
      {title && <Title text={title} />}
      <div className="w-full max-w-page flex-grow justify-center">
        {children}
      </div>
    </main>
  );
};
