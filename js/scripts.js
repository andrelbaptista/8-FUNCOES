// criando uma função
function minhaFuncao() {
  console.log("testando minha função");
}
minhaFuncao();
minhaFuncao();

const minhaFuncaoVariavel = function () {
  console.log("Função atribuida a uma variável");
};

minhaFuncaoVariavel();

function funcaoParamentro(txt) {
  console.log(`Função com parâmetro: ${txt}`);
}

funcaoParamentro("Esse é o parâmetro");
funcaoParamentro("Outro parâmetro");

// return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);
console.log(soma(c, d));

// escopo função
let y = 10;
function testandoEscopo() {
  let y = 20;
  console.log(`O valor de y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`O valor do y fora da função é: ${y}`);

// escopo aninhado
let m = 40;

function aninhado() {
  let m = 30;
  if (true) {
    let m = 20;
    console.log(`o valor de m no primeiro if é ${m}`);
  }
  if (true) {
    let m = 10;
    console.log(`o valor de m no segundo if é ${m}`);
  }
  console.log(`o valor do m na função e fora dos if é: ${m}`);
}

aninhado();
console.log(`o valor do m fora da função é: ${m}`);

// arrow function
const primeiraArrow = () => {
  console.log("esta é a primeira arrow function");
};
primeiraArrow();

const numeroParOuImpar = (x) => {
  if (x % 2 === 0) {
    console.log(`O número ${x} é PAR !`);
    return;
  }
  console.log(`O número ${x} é IMPAR !`);
};

numeroParOuImpar(2);
numeroParOuImpar(3);

// mais sobre arrow functions
const raizQuadrada = (x) => {
  return x / 2;
};

let mQuadrado = 16;
console.log(
  `A raiz quadrada do número ${mQuadrado} é ${raizQuadrada(mQuadrado)} !`
);

const raizCubica = (x) => x / 3;

let mCubico = 9;
console.log(`A raiz cúbica do número ${mCubico} é ${raizCubica(mCubico)} !`);

const mensagemArrow = () => console.log("sem parâmetro e de 1 linha");

// se chamar console.log dentro de console log ira dar undefined
console.log(mensagemArrow());

// parâmetro opcional
const nomeSobrenome = function (n, m) {
  if (!m) {
    console.log(`Pirimeiro parâmetro ${n}, segundo parâmetro ${m}`);
    return;
  }
  console.log(`Pirimeiro parâmetro ${n}, segundo parâmetro ${m}`);
};

nomeSobrenome("André", "Baptista");
nomeSobrenome("André");

// parâmetro default
const multiplicacao = (n2, multiplicador = 2) => {
  let resultado2 = n2 * multiplicador;
  console.log(
    `Pirimeiro parâmetro ${n2}, segundo parâmetro ${multiplicador}, a multiplicação é ${resultado2} `
  );
};
multiplicacao(2, 3);
multiplicacao(2);

const loopRaizQualquer = (n, m, i) => {
  let iSoma = 1;
  while (iSoma <= i) {
    console.log(
      `Pirimeiro parâmetro ${n}, segundo parâmetro ${m}, a raiz ${m} é ${
        n / m
      } `
    );
    iSoma++;
    n = n / m;
  }
};

loopRaizQualquer(36, 2, 2);

// clousure
function funcaoClosure() {
  let txt = "função closure";
  function mostrar() {
    console.log(txt);
  }
  mostrar();
}
funcaoClosure();

const multiplicacaoClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicacaoClosure(5);
console.log(c1);
const c2 = multiplicacaoClosure(10);
console.log(c2);

multiplicacaoClosure(10);

console.log(c1(5));

console.log(c2(10));

// recursividade
const ateDez = (n, m) => {
  if (n < 10) {
    console.log("A função parou !!");
  } else {
    const x = n - m;
    console.log(x);
    ateDez(x, m);
  }
};

ateDez(100, 7);

function fator(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * fator(x-1);
  }
}

const num = 6;
const result = fator(num);
console.log (`o fator do número ${num} é ${result}`);
