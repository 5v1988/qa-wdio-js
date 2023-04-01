class OrderConfirmation {

    get pageTitle() {
        return $('h1.page-title');
    }

    get orderSuccess() {
        return $('.checkout-success');
    }

    async confirmSuccessMsg(message) {
        await this.orderSuccess.waitForDisplayed({ timeout: 5000 });
        expect(await this.pageTitle.getText()).toEqual(message);
    }
}

export default new OrderConfirmation();