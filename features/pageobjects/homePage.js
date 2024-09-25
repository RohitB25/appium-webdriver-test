import { $ } from '@wdio/globals'


class HomePage {




    get pageHeader() {
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }

    get addToCart()
    {
        return $('(//android.widget.TextView[@content-desc="test-Item title"])[2]//following-sibling::android.view.ViewGroup[@content-desc="test-ADD TO CART"]')
    }

    get secondProductName()
    {
        return $('(//android.widget.TextView[@content-desc="test-Item title"])[2]')
    }

    get cartIcon()
    {
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
    }

    get cartPageProduct()
    {
        return $('(//android.view.ViewGroup[@content-desc="test-Item"]//android.view.ViewGroup[@content-desc="test-Description"]//android.widget.TextView)[1]')
    }



    /**
    * This method get the pageHeader element and return
    * @returns element of page header.
    */
    async getPageHeader() {
        return this.pageHeader.getText();
    }

    async clickAddToCartForSecondProduct()
    {
        await this.addToCart.click()
    }

    async fetchHomePageProduct()
    {
        return await this.secondProductName.getText()
    }

    async clickCartIcon()
    {
        await this.cartIcon.click()
    }

    async fetchCheckoutPageProduct()
    {
        return await this.cartPageProduct.getText()
    }





}


export default new HomePage();