import { FunctionComponent, useMemo } from 'react';

import { useResumeManager } from '../../hooks/useResumeManager.ts';
import DocumentPlaceholder from './DocumentPlaceholder.tsx';
import Document from './Document.tsx';
import EditableH1 from './EditableH1.tsx';
import EditableA from './EditableA.tsx';

import { H2 } from './H2.tsx';
// import { Period } from './Period.tsx';
import { Section } from './Section.tsx';

export interface ResumeViewProps {
  id: string;
  mode: 'edit' | 'print';
}

const ResumeView: FunctionComponent<ResumeViewProps> = ({ id, mode }) => {
  const rm = useResumeManager();
  const isInEditMode = mode === 'edit';

  const currentResume = useMemo(() => {
    return rm.resumes.find((r) => r.id === rm.viewing);
  }, [rm.resumes, rm.viewing]);

  if (rm.resumes.length <= 0 || !currentResume) {
    return <DocumentPlaceholder />;
  }

  return (
    <Document id={id}>
      <div className={'grid grid-rows-10 grid-cols-8 gap-x-8 w-full h-full'}>
        {/* WHO */} {/* & */} {/* CONTACT */}
        <div className="col-span-8 row-span-1">
          <div className=" flex flex-col justify-center items-center">
            <EditableH1 resume={currentResume} field="name" />
            <ul className="flex justify-start items-center">
              <li>
                {isInEditMode ? (
                  <EditableA resume={currentResume} field="phone" />
                ) : (
                  <a href={`tel:${currentResume.phone}`}>
                    {currentResume.phone}
                  </a>
                )}
              </li>
              <li className="px-2">|</li>
              <li>
                {isInEditMode ? (
                  <EditableA resume={currentResume} field="email" />
                ) : (
                  <a href={`mailto:${currentResume.email}`}>
                    {currentResume.email}
                  </a>
                )}
              </li>
              <li className="px-2">|</li>
              <li>
                {isInEditMode ? (
                  <EditableA resume={currentResume} field="website" />
                ) : (
                  <a href={`https://www.${currentResume.website}`}>
                    {currentResume.website}
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* HISTORY */}
        <div className="col-span-6 row-span-9">
          <H2>PROFESSIONAL EXPERIENCE</H2>
          {/* <Section>
            {[].map((experience, index, { length }) => (
              <div
                key={experience.companyName}
                className={index < length - 1 ? 'mb-2' : ''}
              >
                <div>
                  <span className="font-medium">{experience.companyName}</span>
                  &nbsp;-&nbsp;
                  <span>{experience.title}</span>
                </div>
                <Period period={experience.period} />
                <ul className="list-disc list-outside pl-6">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-gray-800">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section> */}
        </div>
        {/* INFO */}
        <div className="col-span-2 row-span-9">
          <H2>SKILLS</H2>
          {/* <Section>
            {Object.keys([]).map((skillGroupName, index, { length }) => (
              <div
                key={skillGroupName}
                className={index < length - 1 ? 'mb-2' : ''}
              >
                <div className="font-medium">{skillGroupName}</div>
                <div className="text-gray-800">
                  {[][skillGroupName].join(', ')}
                </div>
              </div>
            ))}
          </Section> */}

          <H2>EDUCATION</H2>
          <Section>
            <div className="font-medium">{currentResume.school}</div>
            <div>{currentResume.degree}</div>
          </Section>

          <H2>LANGUAGES</H2>
          <Section>
            <ul>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </Section>
        </div>
      </div>
    </Document>
  );
};

export default ResumeView;
