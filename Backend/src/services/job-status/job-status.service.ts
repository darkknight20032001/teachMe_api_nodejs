// Initializes the `job-status` service on path `/job-status`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { JobStatus } from './job-status.class';
import createModel from '../../models/job-status.model';
import hooks from './job-status.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'job-status': JobStatus & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/job-status', new JobStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('job-status');

  service.hooks(hooks);
}
