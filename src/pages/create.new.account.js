import BasePage from '../pages/base.page.js';
import { SuccessMessage } from '../pages/base.page.js';

class CreateNewAccount extends BasePage{

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
        let createAnAccountBtn = await browser.findLinkByText('Create an Account');
        await createAnAccountBtn.click();
        await browser.waitUntil(async () => {
            return (await this.getSuccessMessage())
                .includes(SuccessMessage.AccountCreation);
        }, {
            timeout: 5000,
            timeoutMsg: 'Success message has not displayed!'
        })
        let alertMessage = await this.alert.getText();
        expect(alertMessage)
            .toEqual(SuccessMessage.AccountCreation);
    }

}

export default new CreateNewAccount();