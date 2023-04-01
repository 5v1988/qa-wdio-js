import { When, Then } from '@wdio/cucumber-framework';
import ReviewsAndPayments from '../pages/reviews.payments.js';

When(/^User reviews payments and places order$/, async () => {
    await ReviewsAndPayments.placeOrder();
})