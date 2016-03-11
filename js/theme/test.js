import scssToJson from 'scss-to-json';
import path from 'path';


var filePath = path.resolve(__dirname, 'colors.scss');
var colors = scssToJson(filePath);

console.log(colors);
