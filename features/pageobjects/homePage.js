import { $ } from '@wdio/globals'


class HomePage {

    get pageHeader() {
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }

    get productCount() {
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]//android.widget.TextView')
    }

    get cartButton() {
        $('//android.view.ViewGroup[@content-desc="test-Cart"]')
    }

    /**
    * This method uses UiScrollable to perform a scroll action.
    * @param {string} text - The text to scroll into view.
    */
    async performscrollTextIntoView(text) {
        try {
            await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`)
            console.log(`Successfully scrolled to text: ${text}`);
        }
        catch (error) {
            console.error(`Failed to scroll to text: ${text}. Error: ${error.message}`);
        }
    }

    /**
    * This method retrieves the product name as text and clicks on the 'Add to Cart' button for the specified product
    * @param text of the product name
    */
    async clickAddToCart(text) {
        try {
            const addToCartButton = await $(`//android.widget.TextView[@text="${text}"]//following-sibling::android.view.ViewGroup[@content-desc="test-ADD TO CART"]`)
            if (await addToCartButton.isDisplayed()) {
                await addToCartButton.click();
            }
            else {
                console.warn(`Add to Cart button not displayed for product: ${text}`);
            }
        }
        catch (error) {
            console.error(`Failed to click Add to Cart button ${text}. Error: ${error.message}`);
        }
    }

    /**
    * This method get the pageHeader element and return
    * @returns element of page header.
    */
    async getPageHeader() {
        return this.pageHeader;
    }

    /**
    * This method get product count text from cart
    * @returns text of the login error message.
    */
    async getCartCount() {
        return await this.productCount.getText();
    }



    /**
    * This method clicks on the cart element on the page
    */
    async selectCartButton() {
        await this.productCount.click();
    }

    /**
    * Checks if the cart element is currently displayed on the page.
    * @returns {Promise<boolean>} A promise that resolves to `true`
    */
    async isCartElementDisplayed() {
        return await this.productCount.isDisplayed()
    }
}


export default new HomePage();