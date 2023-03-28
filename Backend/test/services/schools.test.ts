import app from '../../src/app';

describe('\'schools\' service', () => {
  it('registered the service', () => {
    const service = app.service('schools');
    expect(service).toBeTruthy();
  });
});
