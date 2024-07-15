import { yarg } from "./plugins/yargs.plugin";
const fs = require("fs");

const { base: numtable, l: limit, s: show } = yarg;
// console.log(base, limit);

const numeroMul = 10;
const headerPlnatilla: string = `
==============================
        Tabla del ${numeroMul}
============================== 
`;
let multiplicarPlantilla: string = "";

for (let index = 1; index < limit + 1; index++) {
	multiplicarPlantilla += `
    ${numeroMul} X ${index} = ${numeroMul * index} 
    `;
}

const outputpath = "outputs";

fs.mkdirSync(outputpath, { recursive: true });

fs.writeFileSync(
	"outputs/" + numeroMul + "-tabla.txt",
	headerPlnatilla + multiplicarPlantilla
);

if (show) console.log(headerPlnatilla + multiplicarPlantilla);
