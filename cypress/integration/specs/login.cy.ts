import { Login } from '../../page-objects/login.page';
import {makeFakeUser, makeFakeAddress, User} from "../../factories/login";
const login = new Login();


describe('Login Navigation', () => {
    it('Login',() => {
        const userUntouched = makeFakeUser()
        const userNewValue = makeFakeUser({
            age: 44,
            blah: '333',
        })
        const addressUntouched = makeFakeAddress()

        const addressNewValue = makeFakeAddress({
            preferences: {
                mailingAddress: {
                    street: 'NEW VALUE'
                }
            }
        })
        cy.log(`userUntouched = ${JSON.stringify(userUntouched)}`)
        cy.log(`userNewValue = ${JSON.stringify(userNewValue)}`)
        cy.log(`addressUntouched = ${JSON.stringify(addressUntouched)}`)
        cy.log(`addressNewValue = ${JSON.stringify(addressNewValue)}`)
        cy.visit('https://www.browserstack.com/guide/cypress-html-reporter')
        cy.dataCy('s')

        login.searchResults().should('be.visible')

    });
});
