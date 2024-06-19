import BasePage  from "./base.page";
import CaregoryMenuComponent from "./components/caregory-menu.comp";

class HomePage extends BasePage {
    open() {
        return super.open("");
    }

    get caregoryMenuComponent(){
        return CaregoryMenuComponent;
    }
}

export default new HomePage();