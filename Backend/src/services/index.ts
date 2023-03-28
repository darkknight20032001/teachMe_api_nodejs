import { Application } from '../declarations';
import users from './users/users.service';
import jobs from './jobs/jobs.service';
import schools from './schools/schools.service';
import profiles from './profiles/profiles.service';
import formApplicant from './form-applicant/form-applicant.service';
import jobStatus from './job-status/job-status.service';
import statusReviewByApplicant from './status-review-by-applicant/status-review-by-applicant.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(jobs);
  app.configure(schools);
  app.configure(profiles);
  app.configure(formApplicant);
  app.configure(jobStatus);
  app.configure(statusReviewByApplicant);
}
