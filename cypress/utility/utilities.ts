export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2); // Generate a random alphanumeric string
    const domain = 'example.com'; // Use your desired domain name
    const email = `${randomString}@${domain}`;
    return email;
  }
  export function generateRandomTitle() {
    const words = ['Amazing', 'Fantastic', 'Incredible', 'Awesome', 'Super', 'Product', 'Service', 'Solution', 'Idea', 'App'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  export function generateRandomUserId() {
    const randomUserId = Math.floor(Math.random() * 1000000); // Change the upper limit as needed
    return randomUserId;
  }

  