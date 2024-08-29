class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

function unionListas(lista1, lista2) {
    let resultado = new Nodo(null); 
    let actual = resultado;

    
    while (lista1 !== null && lista2 !== null) {
        if (lista1.valor < lista2.valor) {
            actual.siguiente = lista1;
            lista1 = lista1.siguiente;
        } else {
            actual.siguiente = lista2;
            lista2 = lista2.siguiente;
        }
        actual = actual.siguiente;
    }

    actual.siguiente = lista1 !== null ? lista1 : lista2;

    return resultado.siguiente;
}

function imprimirLista(cabeza) {
    let resultado = [];
    let actual = cabeza;
    while (actual !== null) {
        resultado.push(actual.valor);
        actual = actual.siguiente;
    }
    console.log(resultado.join(' -> '));
}

function crearLista(arr) {
    let cabeza = null;
    let actual = null;

    for (let valor of arr) {
        if (cabeza === null) {
            cabeza = new Nodo(valor);
            actual = cabeza;
        } else {
            actual.siguiente = new Nodo(valor);
            actual = actual.siguiente;
        }
    }

    return cabeza;
}

let lista1 = crearLista([9, 7, 5, 3, 1]);
let lista2 = crearLista([10, 8, 6, 4, 2]);

let listaUnida = unionListas(lista1, lista2);

console.log('Lista unida (ordenada de menor a mayor):');
imprimirLista(listaUnida);

