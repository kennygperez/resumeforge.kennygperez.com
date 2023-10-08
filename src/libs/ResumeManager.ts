import { z } from 'zod';

export const ResumeSchema = z.object({
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
  | { type: 'view-resume'; resumeId: Resume['id'] };
