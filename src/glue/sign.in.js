import { When , Then} from '@wdio/cucumber-framework'
import CustomerLogin from '../pages/customer.login.js'
import Home from '../pages/home.js'

When(/^User navigates to sign-in page$/, async () => {
    await Home.navigateToSignInPage();
});

Then(/^User logons using credentials: (.+) and (.+)$/, async (email, password) => {
    await CustomerLogin.login(email, password);
});
