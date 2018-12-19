var schoolTeacherTest = require('./SchoolTeacherPage.js');
var loginTest = require('./LoginPage.js')

describe('Testing School Teacher Cycle', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    it('Create exam by teacher', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('schoolteacher@mailinator.com');
        loginTest.setPassword('123123123');
        loginTest.signInClick();

        //Start creating exam ... 
        schoolTeacherTest.openSideMenu();
        schoolTeacherTest.startCreatingExam();
        schoolTeacherTest.nameExam();
        schoolTeacherTest.selectAllClasses();
        await schoolTeacherTest.addingNewCriteria();
        await schoolTeacherTest.clickNext();

        //Send exam
        await schoolTeacherTest.setExamTime();
        await schoolTeacherTest.sendExam();

        //Logout
        browser.wait(schoolTeacherTest.logout());
    });

    it('Check the sent exam by student', async function() {
        //Login with student at this teacher's class to confirm that the exam got sent
        loginTest.loadLoginPage();
        loginTest.setEmail('automation2@test.com');
        loginTest.setPassword('test123');
        loginTest.signInClick();

        //Check the exam notification
        schoolTeacherTest.openNotifications();
        schoolTeacherTest.openExam();
        expect(schoolTeacherTest.checkExamTitle()).toBe('Answer the following question');
    });
});