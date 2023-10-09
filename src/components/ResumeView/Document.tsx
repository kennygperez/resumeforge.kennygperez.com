import { FunctionComponent, PropsWithChildren } from 'react';

import './Document.css';

export const Document: FunctionComponent<PropsWithChildren> = ({
  children,
}) => <div className="document shadow-lg">{children}</div>;
