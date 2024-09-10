const {except , $} = require('@wdio/globals')


class HomePage {

    get pageHeader(){
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }

    get productCount(){
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]//android.widget.TextView')
    }

    async getPageHeader(){
        return this.pageHeader;
    }

    async getCartCount() {
        return await this.productCount.getText();
    }

    get cartButton()
    {
        $('//android.view.ViewGroup[@content-desc="test-Cart"]')
    }

    async performscrollTextIntoView(text){
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`)
    }

    async clickAddToCart(text){
      await $(`//android.widget.TextView[@text="${text}"]//following-sibling::android.view.ViewGroup[@content-desc="test-ADD TO CART"]`).click();   
    }

    async selectCartButton(){
        await this.productCount.click();
    }

    async isCartElementDisplayed(){
        return await this.productCount.isDisplayed()
    }
}

module.exports = new HomePage();