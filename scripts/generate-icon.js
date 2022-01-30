const fs = require("fs");

const svgFolder = "./src/components/Icon/svg";

function convertKebabtoCapital(str) {
  if (!str) return "";
  const camelCase = str.replace(/-./g, (x) => x[1].toUpperCase());
  return camelCase[0].toUpperCase() + camelCase.slice(1);
}

function createComponentFile(fileName) {
  const componentName = convertKebabtoCapital(fileName) + "Icon";
  const content = `// This file was genrerated from 'scripts/generate-icon.ts'
import { ReactComponent as ${componentName} } from "./svg/${fileName}.svg";
export default ${componentName};
`;
  // write content to file with override
  fs.writeFile(
    `./src/components/Icon/${componentName}.tsx`,
    content,
    { flag: "w+" },
    (err) => {
      if (err) throw err;
      console.log(`${componentName} was saved!`);
    }
  );
}

function createIconTypeFile(iconNames) {
  const enumTypeString = `"${iconNames.join('" | "')}"`;
  const content = `// This file was genrerated from 'scripts/generate-icon.ts'
export type IconName = ${enumTypeString};
`;
  // write content to file with override
  fs.writeFile(
    `./src/components/Icon/Icon.type.ts`,
    content,
    { flag: "w+" },
    (err) => {
      if (err) throw err;
      console.log(`Icon.type.ts was saved!`);
    }
  );
}

function main() {
  fs.readdir(svgFolder, (err, files) => {
    if (err) {
      console.log(`error when reading folder ${svgFolder}`, err);
      return;
    }

    const iconNames = [];

    files.forEach((file) => {
      console.log(`Parsing file: ${file}`);
      // get file name without extension
      const fileName = file.substring(0, file.lastIndexOf("."));

      createComponentFile(fileName);
      iconNames.push(fileName);
    });

    createIconTypeFile(iconNames);
  });
}

main();
