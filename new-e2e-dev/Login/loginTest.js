var loginTest = require('./LoginPage.js')

describe('testing login', function() {
    beforeEach(async function() {
        await loginTest.loadLoginPage();
        await loginTest.clearEmail();
        await loginTest.clearPassword();
    });

    it('login with not registered account', async function() {
        await loginTest.setEmail('automation2@test.com');
        await loginTest.setPassword('test123');
        await loginTest.signInClick();

        // //Wait the browser to login the student
        // browser.sleep(2000);
        var temp = element(by.xpath('/html/body/div[1]/div[1]/div/div[1]/div/div'));
        expect(await temp.isPresent()).toBe(true);
    });

    // it('login with wrong password', function() {
    //     loginTest.setEmail('automation1@test.com');
    //     loginTest.setPassword('test');
    //     loginTest.signInClick();

    //     //Wait the browser to login the student
    //     browser.sleep(2000);
    //     expect(element(by.css('.ng-scope.ng-isolate-scope.alert.alert-dismissible.alert-warning')).isPresent()).toBe(true);
    // });

    // it('login with blank fields', function() {
    //     loginTest.signInClick();

    //     //Wait the browser to login the student
    //     browser.sleep(2000);
    //     expect(element.all(by.css('.validation.error.red.ng-binding.ng-scope')).count()).toBe(2);
    // });

    // //We have an issue with our website that a falsy login try will succeed after a true one.
    // //So that this successful login try MUST be the last test case of the whole
    // it('login with regestered account', function() {
    //     loginTest.setEmail('automation1@test.com');
    //     loginTest.setPassword('test123');
    //     loginTest.signInClick();

    //     //Wait the browser to login the student
    //     browser.sleep(2000);
    //     expect(browser.getCurrentUrl()).toEqual('https://demo.tqweem.com/ui/#/student');
    // });

});