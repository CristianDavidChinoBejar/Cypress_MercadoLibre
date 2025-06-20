export default class homePage {

    public inputSearch = () => cy.get("input[id='cb1-edit']");
    public firtsOptionSearch = () => cy.get('#cb1-opt1-1');

    public validateEnableInputSearch(){
        this.inputSearch().should('be.enabled');
    }
}