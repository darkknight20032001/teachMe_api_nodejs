// Initializes the `form-applicant` service on path `/form-applicant`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { FormApplicant } from './form-applicant.class';
import createModel from '../../models/form-applicant.model';
import hooks from './form-applicant.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'form-applicant': FormApplicant & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/form-applicant', new FormApplicant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('form-applicant');

  service.hooks(hooks);
}
