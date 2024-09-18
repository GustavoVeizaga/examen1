// Clase base
 class FiguraGeometrica {
    calcularArea(params) {
    } 
}

// Subclase Cuadrado
class Cuadrado extends FiguraGeometrica {   
    constructor(lado) {
        super()
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

// Subclase Triangulo
class Triangulo extends FiguraGeometrica {

    constructor(base,  altura) {        
        super()
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

// Subclase Rectangulo
class Rectangulo extends FiguraGeometrica {
    constructor(base,altura){
         super()
        this.base = base;
        this.altura = altura;
    }
     calcularArea() {
        return this.base * this.altura;
    }
}

// Función para clasificar figuras
function clasificarFigura(figura) {
        let area = figura.calcularArea();
        if (area < 20) {
            return "Pequeña";
        } else {
            return "Grande";
        }
    }

        const cuadrado = new Cuadrado(3);
        const triangulo = new Triangulo(5, 4);
        const rectangulo = new Rectangulo(6, 3);

        console.log("Cuadrado: Área = " + cuadrado.calcularArea() + ", Clasificación = " + clasificarFigura(cuadrado));
        console.log("Triángulo: Área = " + triangulo.calcularArea() + ", Clasificación = " + clasificarFigura(triangulo));
        console.log("Rectángulo: Área = " + rectangulo.calcularArea() + ", Clasificación = " + clasificarFigura(rectangulo));
