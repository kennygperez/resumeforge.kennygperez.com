import { FunctionComponent } from 'react';
import cx from 'classnames';

const DesktopOnlyShield: FunctionComponent = () => (
  <div
    className={cx(
      'fixed top-0 left-0 z-50',
      'w-screen h-screen',
      'bg-gray-900',
      // visibility control
      'pointer-events-auto lg:pointer-events-none opacity-100 lg:opacity-0',
      // child control
      'flex justify-center items-center'
    )}
  >
    <p className="text-2xl text-white">App not supported on mobile</p>
  </div>
);

export default DesktopOnlyShield;
