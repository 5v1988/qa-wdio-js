import BasePage from '../pages/base.page.js';

class CreateNewAccount extends BasePage{

    successMsg = 'Thank you for registering with Main Website Store.';

    get firstName() {
        return $('#firstname');
    }

    get lastName() {
        return $('#lastname');
    }

    get isSubscribed() {
        return $('#is_subscribed');
    }

    get email() {
        return $('#email_address');
    }

    get password() {
        return $('#password');
    }

    get confirmPassword() {
        return $('#password-confirmation');
    }

    get createAnAccountBtn() {
        return $("//button[.//span[text()='Create an Account']]");
    }

    enterPersonalInfo = async (firstName, lastName) => {
        await this.firstName.addValue(firstName);
        await this.lastName.addValue(lastName);
    }

    signUpNewsletter = async (subscribe) => {
        let state = await this.isSubscribed.isSelected();
        if (subscribe && !state) {
            await this.isSubscribed.click();
        }
    }

    enterSignInInfo = async (email, password) => {
        await this.email.addValue(email);
        await this.password.addValue(password);
        await this.confirmPassword.addValue(password);
    }

    createAnAccount = async () => {
        await this.createAnAccountBtn.click();
        await browser.waitUntil(async () => {
            return (await this.getSuccessMessage())
                .includes(this.successMsg);
        }, {
            timeout: 5000,
            timeoutMsg: 'Success message has not displayed!'
        })
        let alertMessage = await this.alert.getText();
        console.log(alertMessage)
        expect(alertMessage)
            .toEqual(this.successMsg);
    }

}

export default new CreateNewAccount();