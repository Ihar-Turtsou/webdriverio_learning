import BasePage from "./base.page";

class CartPage extends BasePage{
    get shipingRate() {
        return $("//span[contains(text(), 'Flat Shipping Rate:')]/../following-sibling::td")
    }

    get cartTotal(){
        return $('//span[text()="Total:"]/../following-sibling::td')
    }
}

export default new CartPage();