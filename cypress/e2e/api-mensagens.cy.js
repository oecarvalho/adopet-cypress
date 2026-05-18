describe('API Adopet', ()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNzk3YmY5YS1iNTE0LTQ3OTMtOGRiOC05MTBkMGViMGQxMDAiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc3OTA2ODY5NCwiZXhwIjoxNzc5MzI3ODk0fQ.w0LY_uonqL0ZpwFdxUKYMWZvYlS58CarV7KCyUzFmnE`

    it('Mensagens da API', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/0797bf9a-b514-4793-8db8-910d0eb0d100',
            headers: {authorization}
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})