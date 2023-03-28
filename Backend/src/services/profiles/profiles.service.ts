// Initializes the `profiles` service on path `/profiles`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Profiles } from './profiles.class';
import createModel from '../../models/profiles.model';
import hooks from './profiles.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'profiles': Profiles & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/profiles', new Profiles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('profiles');

  service.hooks(hooks);
}

// import { Model } from 'mongoose';
// import { Application } from '../../declarations';
// import { Profiles } from './profiles.class';
// import createModel from '../../models/profiles.model';
// import hooks from './profiles.hooks';
// import { ServiceAddons } from '@feathersjs/feathers';


// // Add this service to the service type index
// declare module '../../declarations' {
//   interface ServiceTypes {
//     'profiles': Profiles & ServiceAddons<any>;
//   }
// }

// export default function (app: Application): void {
//   const options = {
//     Model: createModel(app),
//     paginate: app.get('paginate'),
//     whitelist: ['$populate'] // allow $populate query parameter
//   };

//   class ProfilesService extends Profiles {
//     async find(params: any) {
//       const { $populate, ...restParams } = params.query || {};
//       const profiles = await this.Model.find(restParams).populate($populate || 'createdBy');

//       return profiles;
//     }
//   }

//   // Initialize our service with any options it requires
//   app.use('/profiles', new ProfilesService(options, app));

//   // Get our initialized service so that we can register hooks
//   const service = app.service('profiles');

//   service.hooks(hooks);
// }

