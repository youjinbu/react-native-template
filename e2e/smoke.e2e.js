describe('login flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.id('login'))).toBeVisible().withTimeout(2000);
  });

  it('should show login screen after tap', async () => {
    await element(by.id('login')).tap();
    await waitFor(element(by.text('下一步'))).toBeVisible().withTimeout(2000);
  });
});
