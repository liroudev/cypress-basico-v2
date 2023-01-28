/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html')
});

describe('Central de Atendimento ao Cliente TAT', function() {
    it('Verifica o título da aplicação', function() {
         cy.title().should('be.equal','Central de Atendimento ao Cliente TAT');
    });
});

describe('Preenche os campos obrigatórios do formulário, visíveis e habilitados', function() {
    it('Preenche o nome', function() {
        cy.get('#firstName')
            .should('be.visible')
            .should('be.enabled')
            .type('Filipe')
            .should('have.value','Filipe');
    });

    it('Preenche o sobrenome',function(){
        cy.get('#lastName')
            .should('be.visible')
            .should('be.enabled')
            .type('André')
            .should('have.value','André');
    });

    it('Preenche o e-mail',function() {
        cy.get('#email')
            .should('be.visible')
            .should('be.enabled')
            .type('liroudev@pm.me')
            .should('have.value','liroudev@pm.me');
    });

    it('Preenche Como Podemos de Ajudar ?',function() {
        cy.get('#open-text-area')
            .should('be.visible')
            .should('be.enabled')
            .type('Inclusão de texto a partir de teste automatizado!')
            .should('have.value','Inclusão de texto a partir de teste automatizado!');
    })
});

describe('Submete o formulário com os campos obrigatórios preenchidos', function() {
    it('Preenche os campos e submete o formulário', function() {
        cy.get('#firstName').should('be.visible').should('be.enabled').type('Filipe');
        cy.get('#lastName').should('be.visible').should('be.enabled').type('André');
        cy.get('#email').should('be.visible').should('be.enabled').type('liroudev@pm.me');
        cy.get('#open-text-area').should('be.visible').should('be.enabled').type('Inclusão de texto a partir de teste automatizado!', {delay:0});
        cy.screenshot('evd-campos-preenchidos');
        cy.get('button[type="submit"]').should('be.enabled').click();

        cy.get('.success').should('be.visible');
    });
});
