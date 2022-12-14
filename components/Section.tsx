import { FC, ReactNode } from "react";

import { Title } from "./Title";

export const Section: FC<{
  children: ReactNode;
  title?: string;
  color?: boolean;
  transparent?: boolean;
}> = ({ children, title, color = false, transparent = false }) => {
  return (
    <main
      className={`border-b-2 border-primary-800 flex flex-col justify-center items-center pb-16 px-8 ${
        color
          ? "bg-gradient-to-tr from-primary-600 to-primary-700"
          : "bg-gray-700"
      } ${transparent ? "bg-opacity-0" : ""}`}
    >
      <div className="w-full max-w-page ">
        <>
          {title && (
            <Title
              className="mt-8 text-center md:text-left max-w-page w-full self-start"
              text={title}
            />
          )}
          {children}
        </>
      </div>
    </main>
  );
};
