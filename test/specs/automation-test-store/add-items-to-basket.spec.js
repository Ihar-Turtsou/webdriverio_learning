//npx wdio --spec add-items-to-basket.spec.js
import HomePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";

describe('add items to basket', () => {
 
    it('add specific products to basket & validate cart total', async () => {
        await HomePage.open();
       
        // const skincareLinks = await $$("//a[contains(text(), 'Skincare')]")
        // await skincareLinks[1].click()
        await HomePage.caregoryMenuComponent.categoryMenuLink('Skincare')[1].click();

        // const skincareProducts_Header_Links = await $$(".fixed_wrapper .prdocutname")
        
        await SkinCarePage.addSpecificItems_ValidateTotal("creme precieuse nuit 50ml","total moisture facial cream");
        // await browser.pause(4000)
    });
});
