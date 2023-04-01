
export default class Page{

    get alert() {
        return $("div[role='alert']");
    }

    getSuccessMessage() {
        return $("div[role='alert']").getText();
    }
    
    async openBasePage(baseUrl) {
        await browser.url(baseUrl);
    }
}