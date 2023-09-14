// Define the URLs for the two APIs
const apiUrl1 = 'https://jsonplaceholder.typicode.com/users';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts?userId=2';

// Fetch data from the first API
const fetchData1 = fetch(apiUrl1)
  .then((response) => response.json())
  .catch((error) => console.error('Error fetching data from API 1:', error));

// Fetch data from the second API
const fetchData2 = fetch(apiUrl2)
  .then((response) => response.json())
  .catch((error) => console.error('Error fetching data from API 2:', error));

// Wait for both API requests to complete
Promise.all([fetchData1, fetchData2])
  .then(([usersData, messagesData]) => {
    // Combine the data as needed
    const combinedData = combineData(usersData, messagesData);

    // Display user IDs and user messages
    displayUserData(combinedData);
  })
  .catch((error) => console.error('Error combining data:', error));

// Function to combine data
function combineData(users, messages) {
const messagesMap = new Map();
messages.forEach((message) => {
  const userId = message.userId;
  if (!messagesMap.has(userId)) {
    messagesMap.set(userId, []);
  }
  messagesMap.get(userId).push(message);
});

// Combine the data by matching user IDs
const combinedData = users.map((user) => {
  const userId = user.id;
  const userMessages = messagesMap.get(userId) || [];
  return {
    id: userId,
    messages: userMessages,
  };
});

return combinedData;
}
function displayUserData(data) {
    data.forEach((user) => {
      console.log(`User ID: ${user.id}`);
      console.log('Messages:');
      user.messages.forEach((message) => {
        console.log(`  - ${message.title}: ${message.body}`);
      });
      console.log('\n');
    });
  }
