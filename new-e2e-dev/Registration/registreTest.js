var registrationTest = require('./RegistrationPage.js')
describe('testing registration', function() {
    it('testing a successful registration', function() {
        registrationTest.loadPage();
        registrationTest.setName('This Is The First Automation Script Ever To Run Here!');
        registrationTest.setPassword('test123');
        registrationTest.setPasswordConfirmation('test123');
        registrationTest.setEmail('automation1@test.com');
        registrationTest.selectCountry();
        registrationTest.selectSystem();
        registrationTest.selectGrade();
        registrationTest.registerClick();
    });

    it('registre with all blank fields', function() {

    });

    it('register with an already existing student', function() {

    });

    it('register with wrong password confirmation', function() {

    });

    it('check that all fields are mandatory', function() {

    });

    it('already have an account, go to login page', function() {

    });
});