import app from '../../src/app';

describe('\'job-status\' service', () => {
  it('registered the service', () => {
    const service = app.service('job-status');
    expect(service).toBeTruthy();
  });
});
