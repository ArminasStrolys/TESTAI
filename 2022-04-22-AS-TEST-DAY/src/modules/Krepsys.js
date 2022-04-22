import Vaisius from "./Vaisius.js";

class Krepsys {
  static vaisiai = [];

  static isimti() {
    //   let delId = 0
    let max = Krepsys.vaisiai.sort((a, b) => b.dydis - a.dydis);
    console.log("Didziausia reiksme: ", max[0]);
    //   delId = max[0].id
    //   console.log(delId)
    Krepsys.vaisiai.splice(max, 1);
    console.log(Krepsys.vaisiai);
    // console.log("Masyvo ilgis og: ", Krepsys.vaisiai.length)
    // console.log("Masyvo ilgis sss: ", Krepsys.vaisiai)
  }

  static pripildyti(num = 20) {
    Krepsys.vaisiai = [...Array(num).keys()].map(() => new Vaisius());
  }

  static papildyti() {
    //   console.log('Masyvo ilgis: ', Krepsys.vaisiai.length)
    let short = 20 - Krepsys.vaisiai.length;
    Krepsys.vaisiai.length !== 20 &&
      (Krepsys.vaisiai = [...Array(short).keys()].map(() => new Vaisius()));
    // console.log('papildyto masyvo ilgis: ', Krepsys.vaisiai.length)
  }

  constructor() {}
}

export default Krepsys;
