import { FunctionComponent } from 'react';
import cx from 'classnames';

import { useResumeManager } from '../hooks/useResumeManager';
import Navigator from './Navigator';
import ResumeView from './ResumeView';

const Editor: FunctionComponent = () => {
  const rm = useResumeManager();

  if (rm.loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {/* nav bar: where we can switch between resumes and add new ones */}
      <Navigator />

      {/* resume viewer and editor: here we can view the resume and change the items */}
      <div
        className={cx(
          'bg-white',
          'border border-t-0 border-gray-400',
          'rounded rounded-ss-none',
          'p-8'
        )}
      >
        <p className="mb-8">
          <b>Instructions</b>: Double click on the areas you would like to edit
          on the resume below. Hit enter when you're done.
        </p>

        <ResumeView />
      </div>
    </div>
  );
};

export default Editor;
