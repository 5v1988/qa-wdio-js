
import { When } from '@wdio/cucumber-framework';
import ShippingAddress from '../pages/shipping.address.js';

When(/^User enters the following personal shipping info:$/, async (dataTable) => {
    let personalInfo = dataTable.hashes()[0];
    await ShippingAddress.enterPersonalInfo(personalInfo);
})

When(/^User enters the following shipping address info:$/, async (dataTable) => {
    let shippingAddressInfo = dataTable.hashes()[0];
    await ShippingAddress.enterShippingAddress(shippingAddressInfo);
    await ShippingAddress.selectShippingMethodsAndProceedNext(shippingAddressInfo)
})