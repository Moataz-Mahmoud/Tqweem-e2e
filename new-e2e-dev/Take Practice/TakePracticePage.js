var TakePracticePage = function() {
    var courseTitle = element.all(by.css('.inheritColor.course-title.ng-binding.ng-scope')).get(2);

    var takePracticeButton = element.all(by.css('.btn.btn-warning.btn-icn.btn-block-xs.ng-binding')).get(0);

    var selectCourseElementDropDown = element(by.css('.btn.btn-default.form-control.ui-select-toggle'));
    var selectedCoureseElement;

    var startPracticeButton = element(by.css('.btn.btn-success.btn-lg.btn-block'));

    var finishPracticeButton = element(by.id('finish_exam'));

    var selectFalseButton = element(by.css('.false'));
    var skipModelAnswerButton = element(by.id('practice_review_next'));
    var nextButton = element(by.id('next_practice_question'));

    this.openSubject = function() {
        courseTitle.click();
    };

    this.takePractice = function() {
        takePracticeButton.click();
    };

    this.selectCourseElement = function() { 
        selectCourseElementDropDown.click();
        //Select the second_unit as course element
        selectedCoureseElement = element.all(by.css('.ng-binding.ng-scope')).get(7);
        selectedCoureseElement.click();
    };

    this.startPractice = function() {
        startPracticeButton.click();
    };

    this.solveFalse = async function() {
        await selectFalseButton.click();
    };

    this.goToNextQuestion = async function() {
        await nextButton.click();
    };

    this.skipModelAnswer = async function() {
        await skipModelAnswerButton.click();
    };

    this.finishPractice = async function() {
        await finishPracticeButton.click();
    };
};
module.exports = new TakePracticePage();