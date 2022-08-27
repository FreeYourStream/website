import { FC, ReactNode } from "react";

import { Title } from "./Title";

export const Main: FC<{ children: ReactNode; title?: string }> = ({
  children,
  title,
}) => {
  return (
    <main className="flex flex-col justify-center items-center py-16 px-8">
      {title && <Title text={title} />}
      <div className="w-full max-w-page flex-grow justify-center pt-8">
        {children}
      </div>
    </main>
  );
};
