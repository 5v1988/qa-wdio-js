import { Key } from 'webdriverio';
import Page from '../pages/base.page.js';

class Home extends Page {
    
    get searchTextBox() {
        return $('#search');
    }

    get signIn() {
        return $("*=Sign In");
    }

    get createAnAccount() {
        return $("*=Create an Account");
    }

    async navigateToSignInPage() {
        await this.signIn.click()
    }

    async navigateToNewAccountPage() {
        await this.createAnAccount.click();
    }

    async searchProducts(productName) {
        await this.searchTextBox.addValue(productName);
        await browser.action('key').down(Key.Enter)
            .up(Key.Enter).perform();
    }
}

export default new Home();