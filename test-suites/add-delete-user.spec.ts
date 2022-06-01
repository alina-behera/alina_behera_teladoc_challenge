import { browser, by, element, protractor } from 'protractor';
import { commonPageConstants } from '../page-objects/common/common.constants';
import { WebTables } from "../page-objects/pages/angularjs/webTables.po";

describe('Teladoc Challenge: ', function () {

    let webTables: WebTables;

    beforeAll(async () => {
        
        webTables = new WebTables();

        //Navigate to the web page
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
        await console.log('User has navigated to Protractor Practice Website');

        //Maximize the browser window
        await browser.manage().window().maximize();
        await console.log('Browser window is miximized');

    });

    it('Scenario 1 : Add a new User and Validate user has been added successfully', async function () {

        //Add an User
        //Click on the 'Add User control'
        webTables.addUser.click();

        //Verify heading of the pop-up dialog = Add User
        expect(webTables.getAddUserDialogHeader.getText()).toContain(commonPageConstants.AddUserHeader);

        //Add data to the Required Fields
        webTables.firstName.sendKeys('John');

        //Select a Role
        element(by.cssContainingText('option', 'Sales Team')).click();

        //Enter data for few optional fields
        webTables.lastName.sendKeys('Smith');
        webTables.userName.sendKeys('john.smith');
        webTables.password.sendKeys('test1234');
        webTables.email.sendKeys('j.smith@gmail.com');
        webTables.cellPhone.sendKeys('3456786541');

        //Click on the Save Button
        webTables.saveButton.click();

        //Verify that a new row has been added to the web Table with First Name = John
        //Using the same method we can verify for the all the values for the new user added . Example - LastName , Cellphone, email etc
        expect(webTables.verifyNewUserAdded('John').isDisplayed()).toBeTruthy();

    });

    it('Scenario 2 : Delete User "Novak" and Validate user has been deleted successfully', async function () {

        //Click on the 'Delete' icon for user "novak"
        webTables.deleteIconforSpecificUserName('novak').click();

        //Verify Confirmation dialog header and text
        expect(webTables.confirmationDialogHeader.getText()).toContain(commonPageConstants.DeleteConfirmationHeader);
        expect(webTables.confirmationDialogBody.getText()).toContain(commonPageConstants.DeleteConfirmationText);

        //Click on OK button to delete the record
        webTables.okButton.click();

        //Verify that the entry for User = 'novak' should now have been removed
        expect(webTables.userNovak.isPresent()).toBeFalsy();

    });

    afterAll(() => {
        console.log('End of Add / Delete User Suite');
    });

});