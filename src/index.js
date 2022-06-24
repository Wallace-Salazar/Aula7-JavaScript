let semana = ["segunda", "terça", 4, 5];
console.log(semana);

semana.unshift("domingo");
console.log(semana);

semana.splice(4, 1, "quinta");
console.log(semana);

semana.pop();
console.log(semana);

semana.shift();
console.log(semana);

semana.push("sexta");
console.log(semana);

let items = [
  "teclado gamer",
  "mouse gamer",
  "processador i9",
  "ssd 256gb",
  "ram ddr4"
];

let myItems = items.slice(1, 3);
console.log(myItems);
console.log(items);

let numeros = [1, 25, 23, 12, 11, 56, 33, 25, 69, 2, 37, 58, 3, 4, 5, 8];
numeros.sort();
console.log(numeros);

numeros.sort(function (a, b) {
  return a - b;
});
console.log(numeros);

const dados = {
  nome: "Renato",
  idade: 20,
  cidade: "acre"
};
console.log(dados);
dados.trabalho = true;
console.log(dados);

const cadastro = [
  {
    nome: "Paulo",
    idade: 25,
    cidade: "Rondonia"
  },

  {
    nome: "Luiza",
    idade: 14,
    cidade: "Tocantis"
  },

  {
    nome: "Veronica",
    idade: 17,
    cidade: "pará"
  }
];
console.log(cadastro);
console.log(cadastro[1].idade);
console.log(cadastro[0].cidade);

cadastro[2].signo = "escorpião";
console.log(cadastro);

cadastro[0].comida = "sopa";
console.log(cadastro);

cadastro[1].pizza = "4 queijos";
console.log(cadastro);

cadastro[0].idade = 13;
console.log(cadastro);

delete cadastro[0].idade;
console.log(cadastro);

let cadastros = [
  {
    nome: "yasmin",
    idade: 22
  },
  {
    nome: "maria",
    idade: 33
  },
  {
    nome: "joao",
    idade: 33
  }
];
console.log(cadastros[2].nome);

let cadastro1 = [
  {
    nome: "Thayssa",
    idade: 26,
    estado: "SP",
    signo: "gêmeos"
  },
  {
    nome: "Thais",
    idade: 25,
    estado: "SP",
    signo: "câncer"
  },
  {
    nome: "Julio",
    idade: 20,
    estado: "SP",
    signo: "libra"
  },
  {
    nome: "Taise",
    idade: 32,
    estado: "RS",
    signo: "aquario"
  }
];

console.table(cadastro1);

console.log(cadastro1[2].nome);

let info = [
  {
    nome: "Lucas",
    idade: 22,
    nacionalidade: "brasileiro"
  },
  {
    nome: "Amanda",
    idade: 35,
    nacionalidade: "Argentina"
  },
  {
    nome: "Marcos",
    idade: 15,
    nacionalidade: "Japones"
  }
];

console.log(info[2].nome);
