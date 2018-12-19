var SchoolTeacherPage = function() {
    var sideMenu = element.all(by.css('.fa.fa-bars')).get(0);
    var createExamButon = element.all(by.css('.fa.fa-file-text-o'));
    
    var examName = element(by.id('name'));
    var allClasses = element(by.css('.btn.btn-success.btn-lg.ng-binding'));
    var addNewCriteriaButton = element.all(by.css('.btn.btn-success.btn-block.ng-binding')).get(1);
    var featureName = element.all(by.css('.ui-select-match.ng-scope')).get(0);
    var selectedFeature = element.all(by.css('.ui-select-choices-row-inner')).get(1);
    var possibleValues = element.all(by.css('.ui-select-match.ng-scope')).get(1);
    var selectedValue = element.all(by.css('.ui-select-choices-row-inner')).get(1);
    var slider = element(by.css('.rzslider.ng-isolate-scope'));
    var nextButton = element(by.css('.btn.btn-success.btn-lg.btn-block.ng-binding'));

    var examTime = element(by.id('examtime'));
    var sendExamButton = element(by.css('.btn.btn-success.btn-lg.ng-binding'));

    var logoutMenu = element(by.css('.fa.fa-caret-down'));
    var logoutButton = element(by.id('userMenu_logout'));

    var notificationIcon = element.all(by.id('notifications-btn')).get(1);
    var acceptExam = element.all(by.css('.true')).get(0);

    var takeExamTitle = element(by.css('.landing_title.ng-binding.ng-scope'));

    this.openSideMenu = async function() {
        await sideMenu.click();
    }

    this.startCreatingExam = async function() { 
        await createExamButon.click();
    }

    this.nameExam = async function() {
        await examName.sendKeys('Exam created by automation script');
    }

    this.selectAllClasses = async function() {
        await allClasses.click();
    }

    this.addingNewCriteria = async function() {
        await addNewCriteriaButton.click();
        await featureName.click();
        await selectedFeature.click();
        await possibleValues.click();
        await selectedValue.click();
        await browser.actions().mouseMove(slider).mouseMove({x:100, y:0}).doubleClick().perform();
    }

    this.clickNext = async function() {
        await nextButton.click();
    }

    this.setExamTime = async function() {
        await examTime.sendKeys(10);
    }

    this.sendExam = async function() {
        await sendExamButton.click();
    }

    this.logout = async function() {
        await logoutMenu.click();
        await logoutButton.click();
    }

    this.openNotifications = async function() {
        await notificationIcon.click();
    }

    this.openExam = async function() {
        await acceptExam.click();
    }

    this.checkExamTitle = function() {
        return takeExamTitle.getText();
    }
};
module.exports = new SchoolTeacherPage();