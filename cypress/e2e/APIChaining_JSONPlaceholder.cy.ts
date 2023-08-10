describe('API Chaining in cypress', () => {
    it('Should Make API request and chained them to gather', () => {


        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
            .then((response) => {
                expect(response.status).equal(200)
                const postId = response.body[0].id
                return postId
            })
            .then((postId) => {
                cy.request({
                    method: 'GET',
                    url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
                })
                    .then((response) => {
                        expect(response.status).equal(200);
                        expect(response.body).to.have.length(5);

                    })
            })
    });
})