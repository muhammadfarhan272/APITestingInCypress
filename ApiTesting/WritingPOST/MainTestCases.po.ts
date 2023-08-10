export class MainTestCase{
    GetMethod(){
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
          })
            .its('status')
            .should('equal', 200);
    }
    PostMethod(){
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
              tittle: 'my post',
              userId: 2,
              body: 'My api body'
            }
        })
            .its('status')
            .should('equal', 201)
    }
    PutMethod(){
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
              tittle: 'my post',
              userId: 2,
              body: 'My api body',
              id: 1
            }
          })
            .its('status')
            .should('equal', 200)
    }
    DeleteMethod(){
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
          })
            .its('status')
            .should('equal', 200)
    }
}