import { Then } from "@wdio/cucumber-framework";
import AddToCart from '../pages/add.to.cart.js';

Then(/^User adds choosen product to the cart$/, async () =>{
    await AddToCart.addProductToCart();
})

Then(/^User proceeds to checkout from the cart$/, async () =>{
    await AddToCart.proceedCheckout();
})