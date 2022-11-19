
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


        //Selecionar data
        cy.get('.col-md-12 > .form-group > #date').click({force:true})
        cy.get('[style="display: block; top: 406.234px; left: 424.328px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(4) > :nth-child(6)').click({force:true})
        cy.wait(5000)

        //Aqui não foi encontro o elemento pra ver se o campo recebeu o valor da data selecionado, então a solução foi clicar novamente no campo Data para ver se o dia 25 possui
        //o valor 'active'. Se positivo, significa que esse valor foi o selecionado e está presente no campo.
        cy.get('.col-md-12 > .form-group > #date').click({force:true})
        cy.get('.day.active').contains('25').should('be.visible')
        cy.get('.col-md-12 > .form-group > #date').click({force:true})

        //Clicar no botão para pesquisar
        cy.get('#tours-search > .main_search > .row.g-1 > .col-md-1 > .btn-search.text-center > #submit').click({force:true})


    })
})
