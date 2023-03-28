import app from '../../src/app';

describe('\'form-applicant\' service', () => {
  it('registered the service', () => {
    const service = app.service('form-applicant');
    expect(service).toBeTruthy();
  });
});
