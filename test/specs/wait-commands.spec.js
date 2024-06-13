describe('wait coomand - examples', () => {
  beforeEach(async () => {
    await browser.url('/Ajax-Loader/index.html');
  });

  it('pause command', async () => {
    // const clickMe_Button = await $("//span[@id='button1']");
    // await browser.pause(10000)
    // await clickMe_Button.click()
    const clickMe_Button = await $("//*[text()='CLICK ME!']/..");
    await browser.pause(5000);
    await clickMe_Button.click();
    await browser.pause(1500);
  });

  it('waitForClickable', async () => {
    const click_MeButton = await $('#button1');
    await click_MeButton.waitForClickable({ timeout: 6000 });
    await click_MeButton.click();
    await browser.pause(1500);
  });

  it('waitForDisplayed', async () => {
    const click_MeButton = await $('#button1');
    await click_MeButton.waitForDisplayed({ timeout: 6000 });
  });

  it('waitForExist', async () => {
    const click_MeButton = await $('#button1');
    await click_MeButton.waitForExist();
  });

  it('waitUntil', async () => {
    await browser.url('/Accordion/index.html');
    const loadinStatus_UI = await $('#text-appear-box');

    await loadinStatus_UI.waitUntil(async function () {
        return (await this.getText()) === 'LOADING COMPLETE.';
      },
      {
        timeout: 15000,
        timeoutMsg: 'expected text to be different after 15 sec',
      });
  });
});