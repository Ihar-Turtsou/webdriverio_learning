import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp"

class SkinCarePage extends BasePage {
    get itemComponent(){
        return ItemComponent;
    }

    async addSpecificItems_ValidateTotal(item1, item2){
        const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

        const itemPrices=[];
       
        for(const header of skincareProducts_Header_Links){
            const tempHeaderText = await header.getText();

            if(tempHeaderText.toLowerCase() == item1.toLowerCase() || tempHeaderText.toLowerCase() == item2.toLowerCase()){
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

    }

}

export default new SkinCarePage();