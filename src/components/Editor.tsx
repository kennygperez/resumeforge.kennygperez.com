import { FunctionComponent } from 'react';
import { useResumeManager } from '../hooks/useResumeManager';

const Editor: FunctionComponent = () => {
  const rm = useResumeManager();

  if (rm.loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      {rm.resumes.map((r) => (
        <li key={r.name}>{r.name}</li>
      ))}
    </div>
  );
};

export default Editor;
