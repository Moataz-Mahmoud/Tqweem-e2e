var takePracticeTest = require('./TakePracticePage.js');
var loginTest = require('./LoginPage.js')

describe('Testing take exam', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    it('Testing practicing exam', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('automation1@test.com');
        loginTest.setPassword('test123');
        loginTest.signInClick();

        //Start taking the practice ... 
        takePracticeTest.openSubject();
        takePracticeTest.takePractice();
        takePracticeTest.selectCourseElement();
        takePracticeTest.startPractice();
        //Solving only 3 questions in practice
        for (var i = 1; i <= 3; i++) {
            if (i < 3) {
                await takePracticeTest.solveFalse();
                await takePracticeTest.goToNextQuestion(); 
                await takePracticeTest.skipModelAnswer();  
            }
        } 

        await takePracticeTest.solveFalse();
        await takePracticeTest.finishPractice();
        await takePracticeTest.skipModelAnswer();
        
        expect(browser.getCurrentUrl()).toBe('https://demo.tqweem.com/ui/#/student/course/bc0783a6-fe91-4b5d-8ffa-48714dfccec9');
    });    
});