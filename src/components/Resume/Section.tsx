import { FunctionComponent, PropsWithChildren } from 'react';

interface SectionProps {
  noMarginBottom?: boolean;
}

export const Section: FunctionComponent<PropsWithChildren<SectionProps>> = ({
  children,
  noMarginBottom = false,
}) => <div className={noMarginBottom ? '' : 'mb-10'}>{children}</div>;
