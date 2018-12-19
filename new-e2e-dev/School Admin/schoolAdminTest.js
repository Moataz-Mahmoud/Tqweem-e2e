var schoolAdminTest = require('./SchoolAdminPage.js');
var loginTest = require('./LoginPage.js')

describe('Testing manager section', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    it('Add new manager', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('moatazschool@mailinator.com');
        loginTest.setPassword('123123123');
        loginTest.signInClick();

        await schoolAdminTest.openManagers();
        await schoolAdminTest.addManager();
        //expect the current url
        expect(browser.getCurrentUrl()).toBe('https://demo.tqweem.com/ui/#/schooladmin/manager/add');
        await schoolAdminTest.logout();
    });

    it('update manager', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('moatazschool@mailinator.com');
        loginTest.setPassword('123123123');
        loginTest.signInClick();

        //update manager
        await schoolAdminTest.openManagers();
        await schoolAdminTest.openSideMenu();
        await schoolAdminTest.updateManagerClick(); 
        await schoolAdminTest.updateManagerName();
        await schoolAdminTest.saveManager();
        await schoolAdminTest.checkManagerName();       
    });
});