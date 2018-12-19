var LoginPage = function() {
    var emailInput = element(by.id('email'));
    var passwordInput = element(by.id('password'));
    var signInButton = element(by.css('.btn.btn-success.btn-lg.btn-block.ng-binding'));

    this.loadLoginPage = async function() {
        await browser.get('https://demo.tqweem.com/ui/#/login');
    };

    this.setEmail = async function(email) {
        await emailInput.sendKeys(email);
    };

    this.clearEmail = async function(){
        await emailInput.clear();
    };

    this.setPassword = async function(password) {
        await passwordInput.sendKeys(password);
    };

    this.clearPassword = async function() {
        await passwordInput.clear();
    }

    this.signInClick = async function() {
        await signInButton.click();
    };
};
module.exports = new LoginPage();