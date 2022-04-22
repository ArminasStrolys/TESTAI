function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius {
  constructor(
    dydis = rndNum(5, 25),
    id = rndNum(100000, 9999999),
    prakastas = false
  ) {
    this.dydis = dydis;
    this.id = id;
    this.prakastas = prakastas;
  }
  prakasti() {
    this.prakastas = true;
  }
}

export default Vaisius;
