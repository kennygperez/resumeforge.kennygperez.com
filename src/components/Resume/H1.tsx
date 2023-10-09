import { FunctionComponent, PropsWithChildren } from 'react';

export const H1: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="leading-none text-lg font-bold mb-3">{children}</div>
);
