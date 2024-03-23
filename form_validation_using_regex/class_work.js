const fs = require("fs");
try {
  fs.writeFileSync("now.txt", "Nitin ");
  fs.appendFileSync("now.txt", "kabootar");
  const content = fs.readFileSync("now.txt", "utf-8");
  console.log(content);
} catch (error) {
  console.error("An error occurred:", error.message);
  throw error;
}
