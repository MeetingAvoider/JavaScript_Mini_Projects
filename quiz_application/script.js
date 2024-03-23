const express = require("express");
const http = require("http");
const fs = require("fs");
const myObject = {
  name: "Alice",
  age: 30,
  city: "London",
};
const jsonString = JSON.stringify(myObject);
console.log(jsonString);

fs.writeFile("data.json", jsonString, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data written to file successfully");
  }
});
fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
  } else {
    const c = JSON.parse(data);
    console.log(c);
  }
});
const server = http.createServer((req, res) => {
  if (req.url === "/data" && req.method === "GET") {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading data");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
