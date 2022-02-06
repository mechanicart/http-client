const response = await fetch("https://jsonplaceholder.typicode.com/todos");
const body = await response.json();
console.log(body);
export {};
