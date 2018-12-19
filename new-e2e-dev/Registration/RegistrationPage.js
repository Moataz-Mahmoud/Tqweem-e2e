var RegistrationPage = function() {
	var nameInput = element(by.id('full_name'));
	var passwordInput = element(by.id('password'));
	var confirmPassword = element(by.id('cpassword'));
	var emailInput = element(by.id('email'));
	var countrySelection = element.all(by.css('.caret.pull-right')).get('0');
	var educationalSystem = element.all(by.css('.caret.pull-right')).get('1');
	var gradeSelection = element.all(by.css('.caret.pull-right')).get('2');
	var checkBox = element(by.id('accept'));
	var registerButton = element(by.css('.btn.btn-success.btn-lg.btn-block.ng-binding'));
	var signInButton = element(by.xpath('/html/body/div[1]/div/div/div/aside/div/p[1]/a'));
	var registerYourInformation = element(by.xpath('/html/body/div[1]/div/div/div/aside/div/p[2]/a'));

	this.loadPage = function() {
		browser.get('https://demo.tqweem.com/ui/#/register');
	};

	this.setName = function(name) {
		nameInput.sendKeys(name);
	};

	this.setPassword = function(password) {
		passwordInput.sendKeys(password);
	};

	this.setPasswordConfirmation = function(password) {
		confirmPassword.sendKeys(password);
	};
	
	this.setEmail = function(email) {
		emailInput.sendKeys(email);
	};

	//This function is blocking the two below
	this.selectCountry = function() {
		countrySelection.click();
	};

	//This function is blocked by SelectCountry function
	this.selectSystem = function(system) {
		educationalSystem.click();
	};

	//This function is blocked by SelectCountry function
	this.selectGrade = function(grade) {
		gradeSelection.click();
	};

	this.clickCheckbox = function() {
		checkBox.click();
	}
	
	//This function is blocked by all the above
	this.registerClick = function() {
		registerButton.click();
	};

	this.signInClick = function() {
		signInButton.click();
	};

	this.registerHereClick = function() {
		registerYourInformation.click();
	};
};
module.exports = new RegistrationPage();