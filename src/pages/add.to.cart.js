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

    get viewAndEditCart() {
        return $("//a[.//span[text()='View and Edit Cart']]");
    }

    async addProductToCart() {
        let addToCartBtn = await browser.findButtonByName('Add to Cart');
        await addToCartBtn.click();
        await browser.waitUntil(async () => {
            let count = parseInt(await this.cartCounter.getText());
            return (count > 0);
        });
    }

    async proceedCheckout() {
        await this.cartCounter.waitForClickable();
        browser.pause(3000);
        await this.cartCounter.click();
        let proceedToCheckoutBtn = await browser.findButtonByName('Proceed to Checkout');
        await proceedToCheckoutBtn.click();
    }

}

export default new AddToCart();