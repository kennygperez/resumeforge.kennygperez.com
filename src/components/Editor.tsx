import { FunctionComponent, useId } from 'react';
import cx from 'classnames';

import { useResumeManager } from '../hooks/useResumeManager';
import Navigator from './Navigator';
import ResumeView from './ResumeView';

const Editor: FunctionComponent = () => {
  const rm = useResumeManager();
  const printAreaId = useId();

  if (rm.loading) {
    return <div>loading</div>;
  }

  const handlePrintRequest = async () => {
    const head = document.querySelector('head');
    const resumePageArea = document.getElementById(printAreaId);

    if (!head || !resumePageArea) {
      return; // TODO: prompt error
    }

    const newDoc = document.createElement('html');
    const newHead = document.createElement('head');
    newHead.innerHTML = head.innerHTML;
    newDoc.append(newHead);

    const newBody = document.createElement('body');
    const clonedResumeNode = resumePageArea.cloneNode(true);
    newBody.appendChild(clonedResumeNode);
    newDoc.append(newBody);

    const pw = window.open('', '', 'width=816,height=1056');

    if (!pw) {
      return; // TODO: prompt error
    }

    pw.document.removeChild(pw.document.firstChild!);
    pw.document.appendChild(newDoc);
    pw.focus();
    pw.print();
    pw.close();
  };

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
        <div className="mb-8 flex justify-between items-center">
          <p>
            <b>Instructions</b>: Click on the areas you would like to edit. Hit
            enter when you're done.
          </p>

          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={handlePrintRequest}
          >
            Print as PDF
          </button>
        </div>

        <div className="shadow">
          <ResumeView id={printAreaId} mode="edit" />
        </div>
      </div>
    </div>
  );
};

export default Editor;
