function decodeFilename(filename) {
  const match = filename.match(/_(.+?\.[a-z0-9]+)\./i);
  return match ? match[1] : null;
}

// function decodeFilename(filename) {
//   let partes = filename.split("_");
//   if (partes.length === 2) {
//     let punto = partes[1].split(".");
//     return punto[0] + "." + punto[1];
//   } else {
//     let punto = partes[1] + "_" + partes[2];
//     let res = punto.split(".");

//     return res[0] + "." + res[1];
//   }
// }

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
// ➞ "sleighDesign.png"

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
// ➞ "elf-roster.csv"
