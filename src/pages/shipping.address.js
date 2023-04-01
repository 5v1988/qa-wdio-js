import Page from '../pages/base.page.js';

class ShippingAddress extends Page {

    get emailAddress() {
        return $("input[data-bind*='email']");
    }

    get firstName() {
        return $("[name='firstname']");
    }

    get lastName() {
        return $("[name='lastname']");
    }

    get company() {
        return $("[name='company']");
    }

    get streetLines() {
        return $$("input[name*='street']");
    }

    get city() {
        return $("[name='city']");
    }

    get state() {
        return $("[name='region_id']");
    }

    get postcode() {
        return $("[name='postcode']");
    }

    get country() {
        return $("[name='country_id']");
    }

    get phoneNumber() {
        return $("[name='telephone']");
    }

    get flatRate() {
        return $("//tr[contains(normalize-space(),'Flat Rate')]//input");
    }

    get bestWay() {
        return $("//tr[contains(normalize-space(),'Best Way')]//input");
    }

    get nextBtn() {
        return $("//button[.//span[text()='Next']]");
    }

    async enterPersonalInfo(personalInfo) {
        await browser.waitUntil(() => browser.execute(
            () => document.readyState === 'complete'),
            { timeout: 10000 });
        if (personalInfo['Email'])
            await this.emailAddress.addValue(personalInfo['Email']);
        if (personalInfo['FirstName'])
            await this.firstName.addValue(personalInfo['FirstName']);
        if (personalInfo['LastName'])
            await this.lastName.addValue(personalInfo['LastName']);
        if (personalInfo['Company'])
            await this.company.addValue(personalInfo['Company']);
    }

    async enterShippingAddress(shippingAddress) {
        await this.streetLines[0].waitForDisplayed({ timeout: 5000 });
        if (shippingAddress['Street1'])
            await this.streetLines[0].addValue(shippingAddress['Street1']);
        if (shippingAddress['City'])
            await this.city.addValue(shippingAddress['City']);
        if (shippingAddress['State'])
            await this.state.selectByVisibleText(shippingAddress['State']);
        if (shippingAddress['Zip'])
            await this.postcode.addValue(shippingAddress['Zip']);
        if (shippingAddress['Country'])
            await this.country.selectByVisibleText(shippingAddress['Country']);
        if (shippingAddress['PhoneNumber'])
            await this.phoneNumber.addValue(shippingAddress['PhoneNumber']);
    }

    async selectShippingMethodsAndProceedNext(shippingAddress) {
        let method = shippingAddress['ShippingMethod'];
        if (method == 'Flat Rate') {
            await this.flatRate.click();
        }
        if (method == 'Best Way') {
            await this.bestWay.click();
        }
        await this.nextBtn.click();
    }

}

export default new ShippingAddress();
