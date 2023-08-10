import { generateRandomEmail, generateRandomTitle, generateRandomUserId } from "../../cypress/utility/utilities"

export class ThreeWaysOfPost {
    FirstWaysOfPost() {
        const requestData =
        {
            userId: 2,
            tittle: 'my post',
            email: 'abc@gmail.com'
        }

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: requestData
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tittle).to.eq('my post')
                expect(response.body.userId).to.eq(2)
                expect(response.body.email).to.eq('abc@gmail.com')
            })
    }
    SecondWayOfPost(){
        const requestData =
    {
      userId: generateRandomUserId(),
      tittle: generateRandomTitle(),
      email: generateRandomEmail()
    }

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts/',
      body: requestData
    })
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.tittle).to.eq(requestData.tittle)
        expect(response.body.userId).to.eq(requestData.userId)
        expect(response.body.email).to.eq(requestData.email)
      })
    }
    ThirdWayOfPost(){
        cy.fixture('MyData').then((data)=>{
          const requestData = data;
          cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: requestData
          })
            .then((response) => {
              expect(response.status).to.eq(201)
              expect(response.body.tittle).to.eq(requestData.tittle)
              expect(response.body.userId).to.eq(requestData.userId)
              expect(response.body.email).to.eq(requestData.email)

              expect(response.body).has.property('tittle',requestData.tittle)
              expect(response.body).to.have.property('userId',requestData.userId)
              expect(response.body).to.have.property('email',requestData.email)
            })
        })
    }
}