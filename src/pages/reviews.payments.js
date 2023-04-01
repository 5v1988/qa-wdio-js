class ReviewsAndPayments {

    get applyDiscountCode(){
        return $('span#block-discount-heading');
    }
    
    get discountCode(){
        return $('#discount-code');
    }

    get applyDiscountCode(){
        return $("button[value='Apply Discount']");
    }

    get placeOrderBtn(){
        return $("button[title='Place Order']");
    }
    
    async placeOrder(){
        await this.placeOrderBtn.click();
    }
}

export default new ReviewsAndPayments();