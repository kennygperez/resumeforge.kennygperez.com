import { z } from 'zod';

export const ResumeSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export type Resume = z.infer<typeof ResumeSchema>;

export type ResumeManager = {
  loading: boolean;
  viewing: Resume['name'];
  resumes: Resume[];
};

export type ResumeManagerAction = { type: 'init' };
