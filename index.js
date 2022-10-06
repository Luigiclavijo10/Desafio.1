class curso {
    constructor (titulo,dificultad){
        this.titulo = titulo;
        this.dificultad = dificultad;

        this,lecciones = [];
    }

    agregarLeccion (leccion) {
        this.lecciones.push(leccion);
    }

    eliminarUltimaLeccion() {
        this.lecciones.pop();
    }
}

const cursoJs = newCurso("javaScript,1");
const cursoBackend = newCurso("javaScript,2");

curso.agregarleccion("Intro a Js")
curso.agregarLeccion("Variable")

console.log(cursoJs,cursoBackend);