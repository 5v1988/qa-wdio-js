import BasePage from '../pages/base.page.js';

class Search extends BasePage {

    get productGrid() {
        return $$('div.product-item-info');
    }

    get productNames() {
        return $$('a.product-item-link');
    }

    async getAllProductName() {
        await this.productNames
            .forEach(async (product) => {
                await product.waitForDisplayed({ timeout: 2000 });
            });
        let names = await this.productNames
            .map(async (product) => {
                return await product.getText();
            });
        return names;
    }

    async chooseProduct(productToChoose) {
        await this.productNames.forEach( async (productName) => {
            if ( await productName.getText() == productToChoose ){
                await productName.click();
                return;
            }
        })
    }
}

export default new Search();