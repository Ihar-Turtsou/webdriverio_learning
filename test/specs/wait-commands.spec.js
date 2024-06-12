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


















    

// it.only('Checking reminder your payment is expired for Split', async function() {
//   await environment.set({ rc: true });

//   this.testInfo = {
//       aqa: '@igor.turtsov',
//       clickup: 'https://app.clickup.com/t/86941t7ru',
//       critical: true
//   }

//   await allureReporter.addTestId('975')
//   await allureReporter.addLabel('Environment', 'release candidate')
//   await allureReporter.addLabel('tag', 'UI')
//   await allureReporter.addLabel('tag', 'Backoffice')
//   await allureReporter.addLabel('tag', 'CSA')
//   await allureReporter.addLabel('tag', 'Interaction')
//   await allureReporter.addLabel('layer', 'ui')

//   const ctx = {
//       intId: 41,
//       creds: {
//           email: 'jason.voychishin+test2802_03@careerist.com',
//           password: '12345678'
//       }
//   };
//   // ctx.randomData = credentials()
//   // console.log(`Содержание CTX: ${JSON.stringify(ctx, null, 2)}`);

//   await step('Авторизация в БО', async () => {
//   await browser.setWindowSize(800, 600);
//     await backOfficeLoginPage.loginBackOffice();
//   });
//   await step('Изменение Paid period на +1', async () => {
//       await testingPage.getDealContractId(ctx.intId, tokenValue)  
//       this.planner = await requests.testing.planners.get(dealContractId)
//       const plannerDueDatePlusOne = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
//       await requests.testing.planners.changeDate(this.planner.id, plannerDueDatePlusOne, this.planner.courseLocksAt, tokenValue)
//       await requests.schedule.call('dealInvoiceAutoSendingSchedule', tokenValue)
//       await requests.testing.planners.paymentNotification(tokenValue);
//   });
  
//   await step('Изменение Paid period на сегодня', async () => { 
//       const plannerOneDayOverdueDate1 = new Date(new Date().setDate(new Date().getDate())).toISOString();
//       await requests.testing.planners.changeDate(this.planner.id, plannerOneDayOverdueDate1, this.planner.courseLocksAt, tokenValue)
//       await requests.schedule.call('dealInvoiceAutoSendingSchedule', tokenValue)
//       await requests.testing.planners.paymentNotification(tokenValue);
//   });
  
//   await step('Изменение Paid period на -1', async () => {
//       const plannerOneDayOverdueDate = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString();
//       await requests.testing.planners.changeDate(this.planner.id, plannerOneDayOverdueDate, this.planner.courseLocksAt, tokenValue)
//       await requests.schedule.call('dealInvoiceAutoSendingSchedule', tokenValue)
//       await requests.testing.planners.paymentNotification(tokenValue);
//       // console.log(planner)
//   });
  
//   await step('Проверка плашки в LMS > Payments', async () => {
//       await lmsLoginPage.loginWithPreCreatedUser(ctx.creds.email, ctx.creds.password)
//       await browser.pause(5000)
//       await mainSettingsPage.visitLmsSettingsPage();
//       await browser.pause(5000)
//       await expect(await mainSettingsPage.activePlanTable).toExist()
//       await expect(await mainSettingsPage.activePlanTable).toHaveTextContaining('Split payment (2 of 2)')
//       await expect(await mainSettingsPage.payInvoiceButton).toExist()
//       await $("//p[contains(text(), 'Please pay today')]").waitForDisplayed()
//       await mainSettingsPage.payInvoiceButton.click()
//       await expect(browser).toHaveUrlContaining('helcim-payment')
//   }, { screenshot: true })

  
//   await step('Изменение Freeze period на - 1 дня ', async () => {
//     // поменять дату фриз дэйьт на 3 дня назад
//     await requests.schedule.call('splitCourseLockSchedule', tokenValue)  
//   })
  
//   await step('Изменение Paid period - 3 дня ', async () => {
//       await testingPage.getDealContractId(ctx.intId, tokenValue)  
//       const plannerThreeDayOverdueDate = new Date(new Date().setDate(new Date().getDate() - 3)).toISOString();
//       await requests.testing.planners.changeDate(this.planner.id, plannerThreeDayOverdueDate, this.planner.courseLocksAt, tokenValue)

//       await requests.schedule.call('dealInvoiceAutoSendingSchedule', tokenValue)
//       await requests.testing.planners.paymentNotification(tokenValue);
//   })

//   await step.last('Проверка письма template id: 9655', async () => {
//       await requests.queue.findProcessedTask("SEND_TRANSACTIONAL_EMAIL", ctx.creds.email, 9655, tokenValue)
//   })

//   // await browser.debug();

// });
// });

//  npx wdio --spec interactWorkflowReminder.e2e.js
// Checking reminder before next payment for Split



// autotests/test/requests/bo/testing/planners.js

// autotests/test/requests/schedule.js

// lmsLoginPage.loginWithPreCreatedUser

//  gmailChecker.checkMailContent

// autotests/test/requests/queue.js


// const date = new Date()
//            date.setDate(date.getDate() + 1)
//            const newDate = date.toISOString()


// 69 - 70 заменить и разобраться
// activePlanTableExpired
// payInvoiceButtonExpired




// курс не блокируется, так как не изменена дата для блокирования курса

//             await requests.testing.planners.changeDate(planner.id, newDate, planner.courseLocksAt, tokenValue)
// вместо planner.courseLoacksAt, нужно time.today     
//api-backoffice.dev.careerist.com/testing/recurring-planner/course-lock
