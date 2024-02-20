// 
const fs = require("fs");
const path = require("path");

const directory = "./";

function removeTextFromFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      removeTextFromFiles(filePath);
    } else {
      let fileContent = fs.readFileSync(filePath, "utf8");

      if (fileContent.includes(`<img src="imagens/selo.png" alt="Selo">`)) {
        fileContent = fileContent.replace(`<img src="imagens/selo.png" alt="Selo">`, "");
        fs.writeFileSync(filePath, fileContent);
      }
    }
  });
}

removeTextFromFiles(directory);
