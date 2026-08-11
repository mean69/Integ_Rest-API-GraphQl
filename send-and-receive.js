const query = `{
  student {
    id
    name
    course
  }
}`;


const students = [
  { id: 1, name: "May Ann", course: "BSIT" },
  { id: 2, name: "Grace", course: "BSCpE" },
];


const response = {
  data: {
    student: students[0],
  },
};


console.log("===== GRAPHQL =====\n");

console.log("SEND");
console.log("Query:");
console.log(query);

console.log("RECEIVE");
console.log(JSON.stringify(response, null, 2));
