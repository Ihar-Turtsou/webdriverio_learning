// npx wdio --spec contact-us.spec.js
import allureReporter from "@wdio/allure-reporter"


describe('webdriveruniversity - contact us page', function() {
  // this.retries(1);
  
  beforeEach(async () => {
    await browser.url('/Contact-Us/contactus.html');
    console.log(`>>Broeser Object: + ${JSON.stringify(browser)}`);
    });
    
    it('valid submission - submit all information',async function() {
    // this.retries(1);
    allureReporter.addFeature("Contact us Page - valid Submission")
    allureReporter.addDescription("Validate contact us page by submitting all data");
    allureReporter.addSeverity("Critical")
    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const email = await $('//*[@name="email"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue('Joe');
    await lastName.setValue('Smith');
    await email.setValue('Joesmith@gmail.con');
    await message.setValue('Helo I am John Smith');

    //await browser.debug()
    await submitButton.click();

    const successfulSubmitionHeader = $('#contact_reply>h1');
    await expect(successfulSubmitionHeader).toHaveText('Thank You for your Message!');

    // const successfulSubmitionHeader2 = await $('#contact_reply>h1').getText();
    // await expect(successfulSubmitionHeader2).toEqual('Thank You for your Message!');
  });

  it('invalid submission - dont submit all information', async () => {
    allureReporter.addFeature("Contact us Page - invalid Submission")
    allureReporter.addDescription("Validate contact us page by not submitting all data");
    allureReporter.addSeverity("Normal")

    const firstName = await $('//*[@name="first_name"]');
    const lastName = await $('//*[@name="last_name"]');
    const message = await $('//*[@name="message"]');
    const submitButton = await $('//input[@value="SUBMIT"]');

    await firstName.setValue('Joe');
    await lastName.setValue('Smith');
    await message.setValue('Helo I am John Smith');
    await submitButton.click();

    // const successfulSubmitionHeader = $('body');
    // await expect(successfulSubmitionHeader).toHaveTextContaining (['Error: all fields are required', 'Error: Invalid email address']);

    const successfulSubmitionHeader = await $('body').getText();
    expect(successfulSubmitionHeader).toContain('Error: all fields are required');
    expect(successfulSubmitionHeader).toContain('Error: Invalid email address');
  });
});
