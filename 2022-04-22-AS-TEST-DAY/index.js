import Vaisius from "./src/modules/Vaisius.js";
import Krepsys from "./src/modules/Krepsys.js";

const grauztukai = new Map

const mangas = new Vaisius();

grauztukai.set(mangas)

mangas.prakasti();

// console.log(mangas)

Krepsys.pripildyti();
Krepsys.vaisiai.sort((a, b) => b.dydis - a.dydis);
console.log(Krepsys.vaisiai);
Krepsys.isimti()
Krepsys.papildyti()


// console.log('isimti: ',Krepsys.vaisiai);

// console.log(grauztukai)