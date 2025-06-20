export default class ExamplePage {

    private inputSearch = () => cy.get("input[id='cb1-edit']");

    public validateEnableInputSearch(){
        this.inputSearch().should('be.enabled');
    }
}