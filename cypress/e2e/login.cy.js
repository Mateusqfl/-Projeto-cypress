import userData from '../fixtures/userData.json'

describe('Orange HMN Tests', () => {


  it('Login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.UserName)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.password)
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })

  it('Login Falho', () => {
    cy.visit('/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.UserName)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.password)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
  
})


