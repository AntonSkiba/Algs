const fs = require("fs");
const sharp = require("sharp");

let size = 128; // размер конечного изображения
let path = "sample"; // путь к папке

// Получение всех имен изображений

fs.readdir(path, function(err, items) {
  console.log(items);
});
