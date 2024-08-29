class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function alturaArbol(nodo) {
    if (nodo === null) {
        return 0; 
    }

    let alturaIzquierda = alturaArbol(nodo.izquierdo);
    let alturaDerecha = alturaArbol(nodo.derecho);

    return Math.max(alturaIzquierda, alturaDerecha) + 1;
}

let raiz = new NodoArbol(1);
raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);
raiz.izquierdo.izquierdo = new NodoArbol(4);
raiz.izquierdo.derecho = new NodoArbol(5);
raiz.derecho.derecho = new NodoArbol(6);
