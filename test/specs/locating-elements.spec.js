describe('locating elements', () => {
    beforeEach(async() => {
        await browser.url("https://www.selectors.webdriveruniversity.com/");
    });
    
    it('$ - locate element', async () => {

        await browser.$("//a[@href='#portfolio']").click()
        await browser.pause(3000)
        
        // await browser.$('[data-target="#portfolioModal1"]').click()
        // await browser.pause(3000)
        
        const clickButtonModal = $('[data-target="#portfolioModal1"]')
        await clickButtonModal.click()
        await browser.pause(3000)
       
    });

    it('$$ - locate elements', async () => {
        const expectedTitles = [
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age",
        ]

        const actualTitles =[];

        const tableHeaderTitles = await $$('//table//th')
        for(const title of tableHeaderTitles) {
            // console.log(await title.getText())
            actualTitles.push(await title.getText());
        }
        expect(expectedTitles).toEqual(actualTitles)

    });
});
