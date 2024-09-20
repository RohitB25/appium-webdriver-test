import { driver, $ } from '@wdio/globals'




class LoginPage {

    get inputUsername() {
        return $('~test-Username');
    }

    get inputPassword() {
        return $('~test-Password');
    }

    get btnSubmit() {
        return $('~test-LOGIN');
    }

    get errorMessage() {
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]//android.widget.TextView')
    }


    /**
     * Performs the login action by providing username and password and then clicking the submit button.
     * @param {string} username - used for entered into the username input field.
     * @param {string} password - used for entered into the password input field.
     */
    async login(username, password) {

        try {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        }
        catch (error) {
            console.error(error.errorMessage)
        }
    }

    /**
     * Retrieves the text of the login error message displayed on the page.
     * @returns {<string>} text of the login error message.
     */
    async getLoginErrorMessage() {
        return this.errorMessage.getText();
    }

}


export default new LoginPage();
