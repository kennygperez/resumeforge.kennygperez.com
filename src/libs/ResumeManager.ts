import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { Chance } from 'chance';

const chance = new Chance();

export const ResumeSchema = z.object({
  // meta
  id: z.string().uuid(),
  title: z.string(),
  // resume fields
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  website: z.string(),
});

export type Resume = z.infer<typeof ResumeSchema>;

export type ResumeManager = {
  loading: boolean;
  viewing: Resume['id'];
  resumes: Resume[];
};

export type ResumeManagerAction =
  | { type: 'init' }
  | { type: 'add-new-resume' }
  | { type: 'view-resume'; resumeId: Resume['id'] }
  | {
      type: 'update-resume';
      resumeId: Resume['id'];
      key: keyof Resume;
      value: Resume[keyof Resume];
    };

const SAVE_LIMIT = 5;

export function createNewPopulatedResume(resumes: readonly Resume[]): Resume {
  const newResumeTitle = calcNewResumeTitle(resumes);

  return {
    id: uuidv4(),
    title: newResumeTitle,
    name: chance.name(),
    email: chance.email(),
    phone: chance.phone(),
    website: '',
  };
}

function resumeTemplateTitle(itr = 0): Resume['title'] {
  return 'New Resume' + (itr === 0 ? '' : ` (${itr + 1})`);
}

function calcNewResumeTitle(resumes: readonly Resume[]): Resume['title'] {
  const setOfTitles = new Set<Resume['title']>(resumes.map((r) => r.title));

  for (let itr = 0; itr < SAVE_LIMIT; itr++) {
    const title = resumeTemplateTitle(itr);

    if (!setOfTitles.has(title)) {
      return title;
    }
  }

  return resumeTemplateTitle();
}
