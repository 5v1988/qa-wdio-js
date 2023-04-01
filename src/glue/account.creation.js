import { Given, When } from '@wdio/cucumber-framework';
import { randomNumber } from '../utils/support.js';
import data from '../utils/td.js';
import HomePage from '../pages/home.js'
import CreateNewAccount from '../pages/create.new.account.js'

Given(/^User opens home page$/, async () => {
    let url = await data('url');
    await HomePage.openBasePage(url)
});

When(/^User navigates to create new customer account$/, async () => {
    await HomePage.navigateToNewAccountPage();
});

When(/^User enters personal info: (.+) and (.+)$/, async (firstName, lastName) => {
    await CreateNewAccount.enterPersonalInfo(firstName, lastName)
});

When(/^User (\w+) the checkbox 'Sign Up for Newsletter'$/, async (flags) => {
    await CreateNewAccount.signUpNewsletter(flags);
});

When(/^User enters sign-in info: (.+) , (.+) and (.+)$/, async (email, password, confirmPassword) => {
    let randomNo = randomNumber();
    email = `${email}${randomNo}@e.com`;
    await CreateNewAccount.enterSignInInfo(email, password, confirmPassword);
    await CreateNewAccount.createAnAccount();
});

