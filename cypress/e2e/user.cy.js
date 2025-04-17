import userData from '../fixtures/userData.json'

const Chance = require('chance')
const chance = new  Chance()

describe('Orange HMN Tests', () => {


  it('user info update - Sucess', () => {
   cy.visit('/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.UserName)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.password)
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type(chance.first())
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type(chance.last())
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type("Leão")
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(chance.string())
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('789')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('456')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('10096128402')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-16-04')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
  })

  //it('Login Falho', () => {
    //cy.visit('/auth/login')
   // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.UserName)
   // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.password)
   // cy.get('.oxd-button').click()
  //  cy.get('.oxd-alert-content')
 // })
  
})


