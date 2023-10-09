import { FunctionComponent, PropsWithChildren } from 'react';

import './Document.css';

const Document: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="document shadow-lg">{children}</div>
);

export default Document;
