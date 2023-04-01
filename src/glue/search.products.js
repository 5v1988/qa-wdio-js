import { When , Then } from '@wdio/cucumber-framework';
import Home from '../pages/home.js';
import Search from '../pages/search.results.js'

When(/^User searches for the product: (.+)$/, async (product) => {
    await Home.searchProducts(product);
});

Then(/^User verifies that the product: (.+) displays in the results$/, async (product) => {
    const products = await Search.getAllProductName();
    expect(products).toContain(product);
});

Then(/^User chooses the product: (.+) displays in the results$/, async (product) => {
    await Search.chooseProduct(product);
})
