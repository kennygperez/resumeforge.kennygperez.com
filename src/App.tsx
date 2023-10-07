import { FunctionComponent } from 'react';
import { ResumeManagerProvider } from './providers/ResumeManagerProvider';
import Editor from './components/Editor';
import FancyBackgroundHeaderHeader from './components/FancyBackgroundHeader';

const App: FunctionComponent = () => (
  <>
    <FancyBackgroundHeaderHeader />
    <main>
      <ResumeManagerProvider>
        <Editor />
      </ResumeManagerProvider>
    </main>
  </>
);

export default App;
