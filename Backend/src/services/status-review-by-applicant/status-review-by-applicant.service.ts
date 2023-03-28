// Initializes the `status-review-by-applicant` service on path `/status-review-by-applicant`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { StatusReviewByApplicant } from './status-review-by-applicant.class';
import createModel from '../../models/status-review-by-applicant.model';
import hooks from './status-review-by-applicant.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'status-review-by-applicant': StatusReviewByApplicant & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/status-review-by-applicant', new StatusReviewByApplicant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('status-review-by-applicant');

  service.hooks(hooks);
}
