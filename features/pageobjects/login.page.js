const {$} = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('//android.widget.EditText[@content-desc="test-Username"]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@content-desc="test-Password"]');
    }

    get btnSubmit() {
        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    }

    get errorMessage() {
        return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]')
    }


    /**
     * Performs the login action by providing username and password and then clicking the submit button.
     * @param {string} username - used for entered into the username input field.
     * @param {string} password - used for entered into the password input field.
     * @returns {Promise<void>} A promise that resolves when the login action is complete.
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * Retrieves the text of the login error message displayed on the page.
     * @returns {Promise<string>} A promise that resolves to the text of the login error message.
     */
    async getLoginErrorMessage() {
        return this.errorMessage.getText();
    }

}

module.exports = new LoginPage();
