import userData from '../fixtures/userData.json'

describe('Orange HMN Tests', () => {


  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.UserName)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userSucess.password)
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })

  it('Login Falho', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.UserName)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.userFail.password)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
  
})


