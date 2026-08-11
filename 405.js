// HTTP 405 - Method Not Allowed
// The HTTP method is not allowed for this endpoint.

const method = "DELETE";
const endpoint = "/api/students";

const response = {
  status: 405,
  statusText: "Method Not Allowed",
  body: {
    error: "Method Not Allowed",
    message:
      "DELETE is not allowed on /api/students. Use GET to list or POST to create.",
    allowedMethods: ["GET", "POST"],
  },
};

console.log("=== HTTP 405: Method Not Allowed ===\n");
console.log(`HTTP Method: ${method}`);
console.log(`Endpoint: ${endpoint}`);
console.log(`\nStatus: ${response.status} ${response.statusText}\n`);
console.log("Response:");
console.log(JSON.stringify(response.body, null, 2));
console.log("\nExplanation:");
console.log(
  "The server understood the request but the DELETE method is not",
  "allowed on the /api/students collection endpoint. This endpoint",
  "only supports GET (to list students) and POST (to create a student)."
);
