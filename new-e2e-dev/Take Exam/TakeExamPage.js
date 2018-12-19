var TakeExamPage = function() {
    var takeExamButton = element.all(by.css('.btn.btn-danger.btn-icn.btn-block-xs.ng-binding')).get(0);

    var selectCourseElementDropDown = element(by.css('.caret.pull-right'));
    var selectedCoureseElement;
    var startExamButton = element(by.css('.btn.btn-success.btn-lg.btn-block'))

    var finishExamButton = element(by.id('finish_exam'));
    var skipQuestionsButton = element(by.id('do_skip'));
    var skippedButton = element(by.id('skipped_ok'));
    var examResult = element(by.id('grade-num'));

    var selectTrueButton = element(by.css('.true'));
    var nextButton = element(by.id('next_exam_question'));

    var logoutMenu = element(by.css('.fa.fa-caret-down'));
    var logoutButton = element(by.id('userMenu_logout'));

    this.openSubject = function(courseTitle) {
        courseTitle.click();
    };

    this.takeExam = function() {
        takeExamButton.click();
    };

    this.selectCourseElement = function() { 
        selectCourseElementDropDown.click();
        //Select the first_unit as course element
        selectedCoureseElement = element(by.xpath('//*[@id="ui-select-choices-row-0-0"]/span/div'));
        selectedCoureseElement.click();
    };

    this.selectDifficulty = function(selectedDifficulty) {
        selectedDifficulty.click();
    };

    this.startExam = function() {
        startExamButton.click();
    };

    this.finishIncompleteExam = async function() {
        await finishExamButton.click();
        await skipQuestionsButton.click();
        await skippedButton.click();
    };

    this.finishCompleteExam = async function() {
        await finishExamButton.click();
    };

    this.getExamResult = function() {
        var result = examResult.getText();
        return result;
    }

    this.solveTrue = async function() {
        await selectTrueButton.click();
    }

    this.goToNextQuestion = async function() {
        await nextButton.click();
    }

    this.logout = async function() {
        logoutMenu.click();
        logoutButton.click();
    }
};
module.exports = new TakeExamPage();