import { FunctionComponent, PropsWithChildren } from 'react';

export const H2: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="leading-none text-base font-bold mb-2">{children}</div>
);
