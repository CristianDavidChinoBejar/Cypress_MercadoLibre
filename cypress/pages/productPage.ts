export default class productPage {
    public productTitle = () => cy.get('.ui-search-breadcrumb > .ui-label-builder');
    public brandList = () => cy.get('.ui-search-filter-groups > :nth-child(6) > ul');
}