// HTTP 200 - OK
// The request was successful.


const method = "GET";
const endpoint = "/api/students/1";

const response = {
  status: 200,
  statusText: "OK",
  body: {
    id: 1,
    name: "Reshallyn Mortel",
    course: "BSIT",
    year: 4,
    section: "f1",
    email: "mortelreshallyn.minsu.edu.ph",
  },
};

console.log("=== HTTP 200: OK ===\n");
console.log(`HTTP Method: ${method}`);
console.log(`Endpoint: ${endpoint}`);
console.log(`Status: ${response.status} ${response.statusText}\n`);
console.log("Response:");
console.log(JSON.stringify(response.body, null, 2));
console.log("\nExplanation:");
console.log("The request was successful and the student data was returned.");
