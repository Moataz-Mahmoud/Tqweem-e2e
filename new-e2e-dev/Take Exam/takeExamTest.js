var takeExamTest = require('./TakeExamPage.js');
var loginTest = require('./LoginPage.js')

describe('Testing take exam', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    it('Testing take exam without solving it ', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('automation1@test.com');
        loginTest.setPassword('test123');
        loginTest.signInClick();

        //Start taking the exam ... 
        var subjectTitle = element.all(by.css('.inheritColor.course-title.ng-binding.ng-scope')).get(1);
        takeExamTest.openSubject(subjectTitle);
        takeExamTest.takeExam();
        takeExamTest.selectCourseElement();
        var selectedDifficulty = element(by.css('.btn.diff_difficult.btn-default'));
        takeExamTest.selectDifficulty(selectedDifficulty);
        takeExamTest.startExam();
        await takeExamTest.finishIncompleteExam();
        var examResult = takeExamTest.getExamResult();
        expect(examResult).toEqual('0');
        await takeExamTest.logout();
    });

    it('Testing solving exam', async function() {
        //login to be able to take exam
        loginTest.loadLoginPage();
        loginTest.setEmail('automation1@test.com');
        loginTest.setPassword('test123');
        loginTest.signInClick();

        //Start taking the exam ... 
        var subjectTitle = element.all(by.css('.inheritColor.course-title.ng-binding.ng-scope')).get(2);
        takeExamTest.openSubject(subjectTitle);
        takeExamTest.takeExam();
        takeExamTest.selectCourseElement();
        var selectedDifficulty = element(by.css('.btn.diff_easy.btn-default.btn-success'));
        takeExamTest.selectDifficulty(selectedDifficulty);
        takeExamTest.startExam();
        for (var i = 1; i <= 10; i++) {
            await takeExamTest.solveTrue();
            if (i < 10) {
                await takeExamTest.goToNextQuestion();   
            }
        }
        await takeExamTest.finishCompleteExam();
        var examResult = takeExamTest.getExamResult();
        expect(examResult).toEqual('90');
        await takeExamTest.logout();
    });    
});