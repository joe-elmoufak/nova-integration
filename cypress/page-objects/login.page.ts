export class Login{
    login(){return cy.get('input[name="q"]').first();}

    googleSearchBtn(){
        return cy.get('input[name="btnK"]').first();
    }
    searchResults(){return cy.get('input[name="btnK"]').first();}
}