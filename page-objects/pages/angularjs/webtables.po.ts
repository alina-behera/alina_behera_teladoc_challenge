import { by, element, ElementFinder } from "protractor";

export class WebTables {
    addUser : ElementFinder;
    getAddUserDialogHeader : ElementFinder ;
    firstName : ElementFinder ;
    lastName : ElementFinder ;
    userName : ElementFinder ;
    password : ElementFinder ;
    companyA : ElementFinder ;
    email : ElementFinder ;
    cellPhone : ElementFinder;
    saveButton : ElementFinder ;
    confirmationDialogHeader : ElementFinder ;
    confirmationDialogBody : ElementFinder ;
    okButton :ElementFinder ;
    userNovak : ElementFinder;

//label[@class="radio ng-scope ng-binding"]/input[contains(text(),"Company AAA")]
    constructor() {

        this.addUser = element(by.xpath('//button[contains(text(),"Add User")]'));
        this.getAddUserDialogHeader = element(by.xpath('//div[@class="modal-header"]/h3'));
        this.firstName = element(by.xpath('//td/input[@name="FirstName"]'));
        this.lastName = element(by.xpath('//td/input[@name="LastName"]'));
        this.userName = element(by.xpath('//td/input[@name="UserName"]'));
        this.password = element(by.xpath('//td/input[@name="Password"]'));
        this.companyA = element(by.xpath('//td/label/input[@value ="15"]'));
        this.email = element(by.xpath('//td/input[@name="Email"]'));
        this.cellPhone = element(by.xpath('//td/input[@name="Mobilephone"]'));
        this.saveButton = element(by.xpath('//button[contains(text(),"Save")]'));
        this.confirmationDialogHeader = element(by.xpath('//div[@class="modal-header"]/h3'));
        this.confirmationDialogBody = element(by.xpath('//div[@class="modal-body"]/p'));
        this.okButton = element(by.xpath('//button[contains(text(),"OK")]'));
        this.userNovak = element(by.xpath('//tbody/tr/td[contains(text(),"novak")]'));
    }

    verifyNewUserAdded(ElementName : string){
        return element(by.xpath('//tbody/tr/td[contains(text(),"'+ ElementName +'")]'));
    }

    deleteIconforSpecificUserName(userName : string){
        return element(by.xpath('//tbody/tr/td[contains(text(),"'+ userName +'")]//following-sibling::td[8]/button/i'));
    }
}
