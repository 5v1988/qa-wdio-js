import { Then } from '@wdio/cucumber-framework';
import OrderConfirmation from '../pages/order.confirmation.js';

Then(/^User verifies that order confirmation: (.+) is displayed$/, async (message) => {
    await OrderConfirmation.confirmSuccessMsg(message);
})