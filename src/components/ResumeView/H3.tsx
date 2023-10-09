import { FunctionComponent, PropsWithChildren } from 'react';

export const H3: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="leading-none text-lg mb-2">{children}</div>
);
