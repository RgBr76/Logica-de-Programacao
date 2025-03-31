class Cachorro {
    constructor(nome, comida, sono) {
      this.nome = nome;
      this.comida = comida;
      this.sono = sono;
    }
  
    comer() {
      this.comida = this.comida - 1;
    }
  
    dormir() {
      this.sono = false; // Quando o cachorro dorme, o sono deixa de ser verdadeiro

    }
  }
  
  const cachorro_1 = new Cachorro("Jeremias", 3, true);
  
  // Para o cachorro comer, chamamos o método comer do objeto cachorro_1
  cachorro_1.comer();
  
  // Para o cachorro dormir, chamamos o método dormir do objeto cachorro_1
  cachorro_1.dormir();
  
  console.log(cachorro_1);