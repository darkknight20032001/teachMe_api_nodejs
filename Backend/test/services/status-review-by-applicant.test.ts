import app from '../../src/app';

describe('\'status-review-by-applicant\' service', () => {
  it('registered the service', () => {
    const service = app.service('status-review-by-applicant');
    expect(service).toBeTruthy();
  });
});
