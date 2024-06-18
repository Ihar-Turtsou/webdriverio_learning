// npx wdio --spec advanced-element-interactions.spec.js

describe('advansed element intaractions - examples', () => {

  it('inputs', async () => {
    await browser.url('/Contact-Us/contactus.html');
    const firstNameTextField = $('//*[@name="first_name"]');

    await firstNameTextField.addValue('add your text here ');
    await firstNameTextField.addValue('my added text');
    // await browser.pause(2000);

    await firstNameTextField.setValue('Hello!');
    // await browser.pause(2000);

    await firstNameTextField.clearValue();
    // await browser.pause(3000);
  });

  it('dropdowns', async () => {
    await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    const programmingLanguage_DropdawnList = await $('//*[@id="dropdowm-menu-1"]');
    // await browser.pause(3000);
    await programmingLanguage_DropdawnList.selectByAttribute('value', 'python');
    await expect(programmingLanguage_DropdawnList).toHaveValue('python');
    // await browser.pause(3000);
    
    const tech_DropdawnList = await $('//*[@id="dropdowm-menu-2"]');
    await tech_DropdawnList.selectByIndex(2);
    await expect(tech_DropdawnList).toHaveValue('TestNG', {ignoreCase:true})
    // await browser.pause(3000);
    
    const frontend_DropdawnList = await $('//*[@id="dropdowm-menu-3"]');
    await frontend_DropdawnList.selectByVisibleText('CSS');
    await expect(frontend_DropdawnList).toHaveValue('CSS', {ignoreCase:true})
    // await browser.pause(3000);

  });

it('state commands', async () => {
  await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
  
  const lettuceRadioButton = await $('[value="lettuce"]')
  const lettuceRadioButton_isDisplayed = await lettuceRadioButton.isDisplayed()
  await expect(lettuceRadioButton_isDisplayed).toEqual(true)
  await expect(lettuceRadioButton).toBeEnabled()
  
  const lettuceRadioButton_isClicable = await lettuceRadioButton.isClickable();
  await expect(lettuceRadioButton_isClicable).toEqual(true)
  
  const cabbageRadioButton = await $('[value="cabbage"]')
  const cabbageRadioButton_isEnable = await cabbageRadioButton.isEnabled()
  await expect(cabbageRadioButton_isEnable).toEqual(false)
  await expect(cabbageRadioButton).toBeDisabled();
  
});

it('actions', async () => {
  await browser.url('/Actions/index.html');
  // drag and prop 
  const elem = await $('#draggable');
  const target = await $('#droppable');
  await elem.dragAndDrop(target);
  // await browser.pause(3000)
  
  // double-click
  const doubleClick = await $('#double-click');
  await doubleClick.doubleClick();
  // await browser.pause(3000)
  
  // mouse over
  await $("//button[text()='Hover Over Me First!']").moveTo();
  const firstLink = await $("(//*[text()='Link 1'])[1]");
  await firstLink.waitForClickable();
  await firstLink.click();
  // await browser.pause(3000)
});

it('handling windows', async () => {
  await browser.url('https://www.webdriveruniversity.com/');
  await browser.newWindow('https://www.automationteststore.com/');
  
  let current_Title = await browser.getTitle();
  console.log(`>>Current Window Title: ${current_Title}`);
  await expect(browser).toHaveUrl(/automationteststore/)
  // await browser.pause(3000)
  
  await browser.switchWindow('webdriveruniversity.com')
  let perrentWindow_Title = await browser.getTitle();
  console.log(`>>Parrent Window Title: ${perrentWindow_Title}`);
  await expect(browser).toHaveUrl(/university/)
  // await browser.pause(3000)
  
  await $('#contact-us').click()
  await browser.switchWindow('automationteststore')
  await browser.closeWindow()
  
  await browser.switchWindow('contactus')
  await browser.closeWindow()
  
  await browser.switchWindow('ebdriveru')
  console.log(await browser.getTitle())
  // await browser.pause(3000)
});

it('Iframes', async () => {
  await browser.url('/IFrame/index.html');
  const ifraim = await $('#frame');
  await browser.switchToFrame(ifraim)
  await $("//a[text()='Our Products']").click()
  // await browser.pause(3000)
  await browser.switchToParentFrame()
  // await browser.pause(3000)
});

it('Alerts', async () => {
  await browser.url('/Popup-Alerts/index.html');
  await $('#button1').click();
  // await browser.pause(3000)
  await browser.acceptAlert();
  // await browser.pause(3000)
  
  await $('#button4').click();
  const alertText = await browser.getAlertText();
  // await browser.pause(3000)
  await expect(alertText).toEqual('Press a button!')
  // await browser.pause(3000)
  await browser.acceptAlert()
  await expect($('#confirm-alert-text')).toHaveText('You pressed OK!')
  
  // await browser.pause(3000)
  
  await $('#button4').click();
  await browser.dismissAlert();
  await expect($('#confirm-alert-text')).toHaveText('You pressed Cancel!')
  // await browser.pause(3000)
});

it('File upload', async () => {
  await browser.url('/File-Upload/index.html');
  await $('#myFile').addValue(`${process.cwd()}\\data\\dummy_file.text`)
  // await browser.pause(3000)
  await $('#submit-button').click();
  // await browser.pause(3000)
});

it('JS execute', async () => {
  await browser.url('/Hidden-Elements/index.html');
  await browser.execute(()=>{
    return document.getElementById('not-displayed').setAttribute('id','')
  });
  // await browser.pause(3000)
  await browser.execute(()=>{
    return document.body.style.backgroundColor ='red'
  });
  // await browser.pause(3000)

});

});
