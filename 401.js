// HTTP 401 - Unauthorized
// Authentication is required or has failed.

const method = "PUT";
const endpoint = "/api/students/1";

const requestPayload = {
  name: "Reyza Paulino",
  course: "BSIT",
  year: 4,
  email: "paulinoreyza.minsu.edu.ph",
};

const response = {
  status: 401,
  statusText: "Unauthorized",
  body: {
    error: "Unauthorized",
    message: "Authentication is required. Please provide a valid API key or token.",
  },
};

console.log("=== HTTP 401: Unauthorized ===\n");
console.log(`HTTP Method: ${method}`);
console.log(`Endpoint: ${endpoint}`);
console.log("Authorization: (none provided)\n");
console.log("Request Payload:");
console.log(JSON.stringify(requestPayload, null, 2));
console.log(`\nStatus: ${response.status} ${response.statusText}\n`);
console.log("Response:");
console.log(JSON.stringify(response.body, null, 2));
console.log("\nExplanation:");
console.log(
  "The server rejected the PUT request because no valid authentication",
  "credentials were provided. A valid API key or token is required to",
  "update student records."
);
