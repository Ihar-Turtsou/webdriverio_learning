// npx wdio --spec contact-us.spec.js
import allureReporter from "@wdio/allure-reporter"
import ContactUsPage from "../../pageObjects/webdriver-university/contact-us.page"



describe('webdriveruniversity - contact us page', function() {
  // this.retries(1);
  
  beforeEach(async () => {
    await ContactUsPage.open();
    console.log(`>>Broeser Object: + ${JSON.stringify(browser)}`);
    // console.log("CONFIG ENV" + browser.config.environment);
    });
    
    it('valid submission - submit all information',async function() {
    // this.retries(1);
    allureReporter.addFeature("Contact us Page - valid Submission")
    allureReporter.addDescription("Validate contact us page by submitting all data");
    allureReporter.addSeverity("Critical")

    ContactUsPage.submitForm_UsingRandomData('Joe','Smith')


    await expect(ContactUsPage.successfulSubmissionHeader).toHaveText('Thank You for your Message!');

  });

  it('invalid submission - dont submit all information', async () => {
    allureReporter.addFeature("Contact us Page - invalid Submission")
    allureReporter.addDescription("Validate contact us page by not submitting all data");
    allureReporter.addSeverity("Normal")

    ContactUsPage.submitForm('Joe','Smith','','Helo I am John Smith')


    await expect(ContactUsPage.unSuccessfulSubmitionHeader).toHaveTextContaining (['Error: all fields are required', 'Error: Invalid email address']);

    // const successfulSubmitionHeader = await $('body').getText();
    // expect(successfulSubmitionHeader).toContain('Error: all fields are required');
    // expect(successfulSubmitionHeader).toContain('Error: Invalid email address');
  });

  it('Only set a first name', async () => {
    ContactUsPage.submitForm('Joe','','','');
    await expect(ContactUsPage.unSuccessfulSubmitionHeader).toHaveTextContaining (['Error: all fields are required', 'Error: Invalid email address']);
  });
});
