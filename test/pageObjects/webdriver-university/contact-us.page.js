import BasePage from './base.page';
import dataGenerator from "../../../utils/data-generator";

class ContactUsPage extends BasePage {
  open() {
    return super.open('Contact-Us/contactus.html');
  }

  get inputFirstName() {
    return $('//*[@name="first_name"]');
  }

  get inputLastName() {
    return $('//*[@name="last_name"]');
  }

  get inputEmail() {
    return $('//*[@name="email"]');
  }

  get inputMessage() {
    return $('//*[@name="message"]');
  }
  
  get submitButton() {
    return $('//input[@value="SUBMIT"]');
  }

  get successfulSubmissionHeader(){
    return $('#contact_reply>h1')
  }

  get unSuccessfulSubmitionHeader (){
    return $('body')
  }

  async submitForm(firstName, lastName, email, message){
    await this.inputFirstName.setValue(firstName)
    await this.inputLastName.setValue(lastName)
    await this.inputEmail.setValue(email)
    await this.inputMessage.setValue(message)
    await this.submitButton.click()
  }

  async submitForm_UsingRandomData(firstName, lastName){
    await this.inputFirstName.setValue(firstName)
    await this.inputLastName.setValue(lastName)
    await this.inputEmail.setValue("AutoEmail_" + dataGenerator.generateRandomString()+"@gmail.com")
    await this.inputMessage.setValue("RandomMesage_: " + dataGenerator.generateRandomString())
    await this.submitButton.click()
  }

}

export default new ContactUsPage();
