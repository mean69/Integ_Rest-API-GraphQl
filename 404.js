
// HTTP 404 - Not Found
// The requested resource does not exist.

const method = "PATCH";
const endpoint = "/api/students/1234";

const requestPayload = {
  email: "faminialagao.minsu.edu.ph",
};

const response = {
  status: 404,
  statusText: "Not Found",
  body: {
    error: "Not Found",
    message: "Student with ID 1234 does not exist.",
  },
};

console.log("=== HTTP 404: Not Found ===\n");
console.log(`HTTP Method: ${method}`);
console.log(`Endpoint: ${endpoint}\n`);
console.log("Request Payload:");
console.log(JSON.stringify(requestPayload, null, 2));
console.log(`\nStatus: ${response.status} ${response.statusText}\n`);
console.log("Response:");
console.log(JSON.stringify(response.body, null, 2));
console.log("\nExplanation:");
console.log(
  "The server could not find a student with ID 1234. The PATCH request",
  "failed because the resource does not exist in the database."
);
