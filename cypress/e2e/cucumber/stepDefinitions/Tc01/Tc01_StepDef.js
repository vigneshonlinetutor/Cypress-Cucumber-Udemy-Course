/// <reference types="Cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function(){
    cy.fixture('ConduitData').as('data')
})

Given('I am on the Conuduit Login page', function () {
    cy.visit('https://react-redux.realworld.io/')
    cy.get('a[href="#login"]').click()
})

When('I login with valid credentials', function (dataTable) {
    /*
    When using fixture
    cy.get('input[placeholder="Email"]').type(this.data.email)
    cy.get('input[placeholder="Password"]').type(this.data.password)
    */
    
    cy.get('input[placeholder="Email"]').type(dataTable.rawTable[1][0])
    cy.get('input[placeholder="Password"]').type(dataTable.rawTable[1][1])
    cy.get('button[type="submit"]').click()
})

And('I click on the settings button', function () {
    cy.get('a[href="#settings"]').click()
})

And('I click on the Logout Button', function () {
    cy.get('.btn.btn-outline-danger').click()
})

Then('I route back to the Login page', function () {
    cy.title().should('eq','Conduit')
})