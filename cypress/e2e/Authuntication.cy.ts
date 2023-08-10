describe('Authentication',()=>{
    it('Basic Authentication', () => {
        cy.request({
            method: 'GET',
            url : 'http://postman-echo.com/basic-auth',
            auth : {
                user : "postman",
                pass : "password"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    });
    it('Digest Authentication', () => {
        cy.request({
            method: 'GET',
            url : 'http://postman-echo.com/basic-auth',
            auth : {
                username : "postman",
                password : "password",
                method: 'digest'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    });

    const token = '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';
    it('Bearer Token Authentication', () => {
        cy.request({
            method: 'GET',
            url : 'http://api.github.com/user/repos',
            headers : {
                Authorization: 'bearer '+token
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
        })
    });
})