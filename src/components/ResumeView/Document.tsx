import { FunctionComponent, PropsWithChildren } from 'react';

import './Document.css';

interface DocumentProps {
  id: string;
}

const Document: FunctionComponent<PropsWithChildren<DocumentProps>> = ({
  id,
  children,
}) => (
  <div id={id} className="document">
    {children}
  </div>
);

export default Document;
