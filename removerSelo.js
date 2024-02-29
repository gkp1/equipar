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
// removeTextFromFiles(directory);

function replaceText(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      removeTextFromFiles(filePath);
    } else {
      let fileContent = fs.readFileSync(filePath, "utf8");

      if (fileContent.includes(`<div class="social">`)) {
        fileContent = fileContent.replace(
          `<div class="social">`,
          `<div class="social">
            <a
              rel="nofollow"
              class="fright"
              title="Clique e ligue"
              href="https://wa.me/5517997724429?text=Bom%20dia.%20Vim%20do%20website%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es"
              ><image src="imagens/icones/wa-icon-15px-white.png"></image> 17 <strong>99772-4429</strong></a
            >`
        );
        fs.writeFileSync(filePath, fileContent);
      }
    }
  });
}
replaceText(directory);

/*

replace

<div class="social">

with:

<div class="social">
            <a
              rel="nofollow"
              class="fright"
              title="Clique e ligue"
              href="https://wa.me/5517997724429?text=Bom%20dia.%20Vim%20do%20website%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es"
              ><image src="imagens/icones/wa-icon-15px-white.png"></image> 17 <strong>99772-4429</strong></a
            >

*/
