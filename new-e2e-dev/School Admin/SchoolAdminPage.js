var SchoolAdminPage = function () {
    var managerPage = element.all(by.css('.btn.btn-danger.btn-lg.btn-block.ng-binding')).get(0);
    var studentsPage = element.all(by.css('.btn.btn-danger.btn-lg.btn-block.ng-binding')).get(1);
    var teacherPage = element.all(by.css('.btn.btn-danger.btn-lg.btn-block.ng-binding')).get(2);
    var invitationsPage = element.all(by.css('.btn.btn-danger.btn-lg.btn-block.ng-binding')).get(3);

    var addManagerButton = element(by.css('.btn.btn-primary.pull-right.flip.ng-binding'))

    var sideMenu = element.all(by.css('.btn.btn-success.btn-lg.pull-right.flip')).get(0);

    var updateManagerButton = element.all(by.id('update-manager')).get(0);
    var managerName = element(by.id('full_name'));
    var saveButton = element(by.css('.btn.btn-success.btn-lg.btn-block.ng-binding'));

    var logoutMenu = element(by.css('.fa.fa-caret-down'));
    var logoutButton = element(by.id('userMenu_logout'));

    //update this value everytime you run the script for better results
    var newManagerName = "Manager Edited By e2e"
    this.openManagers = async function() {
        await managerPage.click();
    }

    this.addManager = async function() {
        await addManagerButton.click();
    }

    this.openSideMenu = async function() {
        await sideMenu.click();
    }

    this.updateManagerClick = async function() {
        await updateManagerButton.click();
    }

    this.updateManagerName = async function() {
        await managerName.clear();
        await managerName.sendKeys(newManagerName);
    }

    this.saveManager = async function() {
        await saveButton.click();
    }

    this.checkManagerName = async function() {
        managerName = element.all(by.css('.link-item-title.ng-binding')).get(0);
        await expect(managerName.getText()).toBe(newManagerName);
    }    

    this.logout = async function() {
        logoutMenu.click();
        logoutButton.click();
    }
}
module.exports = new SchoolAdminPage();