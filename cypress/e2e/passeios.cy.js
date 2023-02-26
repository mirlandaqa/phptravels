
describe('Pesquisar passeios', () => {

    beforeEach(()=>{
        cy.visit('https://phptravels.net/')
    })

    it('Pesquisar destinos pra uma pessoa', ()=> {

        //Clicar na aba Passeios
        cy.get('button[id="tours-tab"]').click({force:true})

        //Selecionar cidade
        cy.get('#select2-tours_city-container').click({force:true})
        cy.get('.select2-search__field').type('Manaus')
        cy.scrollTo('top')
        cy.wait(16000)
        cy.get('li').contains('Manaus,Brazil').click()
        cy.scrollTo('top')
        cy.get('span[title="Manaus,Brazil"]').should('be.visible')


        //Clicar no botão para pesquisar
        cy.get('#tours-search > .main_search > .row.g-1 > .col-md-1 > .btn-search.text-center > #submit').click({force:true})


    })
})
