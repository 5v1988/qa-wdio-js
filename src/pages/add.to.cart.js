class AddToCart {

    get addToCart() {
        return $("button[title='Add to Cart']");
    }

    get quantity() {
        return $('#qty');
    }

    get cartCounter() {
        return $('a.showcart span.counter');
    }

    get proceedToCheckout() {
        return $("//button[normalize-space()='Proceed to Checkout']");
    }

    get viewAndEditCart() {
        return $("//a[.//span[text()='View and Edit Cart']]");
    }

    async addProductToCart() {
        await this.addToCart.click();
        await browser.waitUntil(async () => {
            let count = parseInt(await this.cartCounter.getText());
            return (count > 0);
        });
    }

    async proceedCheckout() {
        await this.cartCounter.waitForClickable();
        browser.pause(3000);
        await this.cartCounter.click();
        await browser.waitUntil( async () => {
           return await this.proceedToCheckout.isDisplayed();
        });
        await this.proceedToCheckout.waitForClickable();
        await this.proceedToCheckout.click();
    }

}

export default new AddToCart();