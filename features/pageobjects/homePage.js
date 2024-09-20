import { $ } from '@wdio/globals'


class HomePage {

    get pageHeader() {
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }

    /**
    * This method get the pageHeader element and return
    * @returns element of page header.
    */
    async getPageHeader() {
        return this.pageHeader;
    }

}


export default new HomePage();