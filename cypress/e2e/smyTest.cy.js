/// <reference types= "cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
let itemsToSelect = ["Women","Men","Gear"]

let RandomIndex = Math.floor(Math.random()*itemsToSelect.length)
cy.log(RandomIndex+"@@@@@@@@@@@@2")
    cy.contains(itemsToSelect[RandomIndex]).click();

    
    cy.get(".products-grid.grid").find('div.product-item-info').eq(1).click()
    let mytext = cy.get('.stock.available').invoke('text')

cy.log(mytext)
    


  
  });
});  


  
