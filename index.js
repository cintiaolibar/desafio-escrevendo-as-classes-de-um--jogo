class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let attack = "";
  
      if (this.tipo === "mago") {
        attack = "magia";
      } else if (this.tipo === "guerreiro") {
        attack = "espada";
      } else if (this.tipo === "monge") {
        attack = "artes marciais";
      } else if (this.tipo === "ninja") {
        attack = "shuriken";
      }
  
      console.log(`O ${this.tipo} atacou usando ${attack}`);
    }
  }
  
  // Exemplo de uso
  let mago = new Hero("Merlin", 100, "mago");
  let guerreiro = new Hero("Ragnar", 35, "guerreiro");
  let monge = new Hero("Floki", 50, "monge");
  let ninja = new Hero("Wick", 28, "ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();