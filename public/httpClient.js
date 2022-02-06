"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var response = await fetch("https://jsonplaceholder.typicode.com/todos");
var body = await response.json();
console.log(body);