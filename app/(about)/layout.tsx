import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: IProps) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div>Insights</div>
      {children}
    </main>
  );
}
