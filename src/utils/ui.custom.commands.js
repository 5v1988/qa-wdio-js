
let UiCommands = {

    /**
     * @description : find an element of type: link by passing link text
     * @param {*} linkName 
     * @returns link that matches the text parameter
     */

    'findLinkByText' : async (linkName) => {
        let link = await $(`//button[normalize-space()='${linkName}']`);
        browser.waitUntil( async() => {
            return await link.isClickable();
        },{
            timeout: 5000,
            timeoutMsg: `Button : ${linkName} is not displayed, even after 5 seconds`
        });
        return link;
    },

    /**
     * @description : find an element of type: button by passing button name
     * @param {*} buttonName 
     * @returns button that matches the name of the button
     */

    'findButtonByName' : async (buttonName) => {
        let button = await $(`//button[normalize-space()='${buttonName}']`);
        await button.waitForClickable({
            timeout: 5000 ,
            timeoutMsg: `Button : ${buttonName} is not displayed, even after 5 seconds`
        })
        return button;
    }

};

export default UiCommands;