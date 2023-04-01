import BasePage from '../pages/base.page.js';

class CustomerLogin extends BasePage{

    get email(){
        return $('#email');
    }

    get password(){
        return $('#pass');
    }

    get loginBtn(){
        return $('button.login');
    }

    async login(emailId, passWord){
        await this.email.addValue(emailId);
        await this.password.addValue(passWord);
        await this.loginBtn.click();
    }
}

export default new CustomerLogin();