import { z } from 'zod';

export const ResumeSchema = z.object({
  // meta
  id: z.string().uuid(),
  title: z.string(),
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
