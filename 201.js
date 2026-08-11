// HTTP 201 - Created
// A new resource was successfully created.

const method = "POST";
const endpoint = "/api/students";

const requestPayload = {
  name: "Kathleen Kem Palacio",
  course: "BSIT",
  year: 4,
  email: "palaciokatleen.minsu.edu.ph",
};

const response = {
  status: 201,
  statusText: "Created",
  body: {
    id: 2,
    name: "Kathleen Kem Palacio",
    course: "BSIT",
    year: 1,
    email: "palaciokathleen.minsu.edu.ph",
  },
};

console.log("=== HTTP 201: Created ===\n");
console.log(`HTTP Method: ${method}`);
console.log(`Endpoint: ${endpoint}\n`);
console.log("Request Payload:");
console.log(JSON.stringify(requestPayload, null, 2));
console.log(`\nStatus: ${response.status} ${response.statusText}\n`);
console.log("Response:");
console.log(JSON.stringify(response.body, null, 2));
console.log("\nExplanation:");
console.log(
  "A new student was successfully created. The server returned the",
  "newly created record with an assigned ID."
);
