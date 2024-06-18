//npx wdio --spec add-items-to-basket.spec.js
import HomePage from "../../pageObjects/automation-test-store/home.page";

describe('add items to basket', () => {
 
    it('add specific products to basket & validate cart total', async () => {
        await HomePage.open();
       
        const skincareLinks = await $$("//a[contains(text(), 'Skincare')]")
        await skincareLinks[1].click()

        const skincareProducts_Header_Links = await $$(".fixed_wrapper .prdocutname")

        const itemPrices=[];
       
        for(const header of skincareProducts_Header_Links){
            const tempHeaderText = await header.getText();

            if(tempHeaderText.toLowerCase() == "creme precieuse nuit 50ml" || tempHeaderText.toLowerCase() == "total moisture facial cream"){
                const attr = await header.getAttribute("href")
                const itemId = attr.split("id=").pop();
                await $('//a[@data-id="' + itemId + '"]').click()

                itemPrices.push(
                    await $("//a[@data-id='" + itemId + "']/following-sibling::div/div[@class='pricenew']" + "| //a[@data-id='" + itemId + "']/following-sibling::div/div[@class='oneprice']").getText()
                )
            }
            const formatedItemPrices = [];
            itemPrices.forEach((price)=>{
                formatedItemPrices.push(price.replace("$",""))
            });

            var itemsTotal =0;
            formatedItemPrices.forEach(price=>itemsTotal+=parseFloat(price))  
        }
        
        await $("//span[text()='Cart']").click()
        await expect(browser).toHaveUrl(expect.stringContaining("checkout")) 
        
        let shipingRate = await $("//span[contains(text(), 'Flat Shipping Rate:')]/../following-sibling::td").getText()
        shipingRate = shipingRate.replace('$','')
        itemsTotal += parseFloat(shipingRate) 
        
        // extract cart total
        let cartTotal =  await $('//span[text()="Total:"]/../following-sibling::td').getText()
        cartTotal = cartTotal.replace('$','')
        expect(itemsTotal).toEqual(parseFloat(cartTotal))

        // await browser.pause(4000)
    });
});
