/*Enuncuado Ejercicio 1:  
1. Hacer un array o un objeto de aceites esenciales y hacer un programa que pueda mostrar
la información de cada aceite esencial. 
2. Añadir la capacidad de buscar información de varios aceites esenciales a la vez*/

// Crear un objeto con las caracteristicas
//como es información estática hacemos una constante. Lo que vamos a hacer es un objeto, que va a tener varias claves. Por ejemplo 'Lavanda'

const infoAceitesEsenciales = {
    'Lavanda': {
        scientistName: 'Lavandula angustifolia',
        property: ['Propicia el sueño', 'Relajante'], //array de sus propiedades
        note: "media"
    },

    'Menta': {
        scientistName: 'Mentha x piperita',
        property: ['Anestesiante', 'Tónico intestinal'],
        note: "alta"
    },
    'Eucalipto': {
        scientistName:'Eucaliptus Globulus', 
        property:['Expectorante', 'Analgésico'],
        note: 'alta'
    },
    'Romero': {
        scientistName:'Rosmarinus oficinalis',
        property:['Repelente de insectos', 'Antiinflamatorio'],
        note: 'alta'
    }
}

//función: mostrar información del aceite esencia, de  forma individual

function mostrarInfoAceiteEsencial(esencia){ //la variable es la esencia y es algo que yo pongo aquí, no viene en el array de objetos

console.log(`##### ${esencia} ######`)

//comprobar si la esencia está dentro de la información con el if
if(esencia in infoAceitesEsenciales){
    //se hace una constante para sacar la información de esa variable
    const informacion = infoAceitesEsenciales[esencia];
    console.log(informacion)
    //Mostrar la información
    console.log(`Nombre científico: ${informacion.scientistName}`)
    console.log(`Propiedades: ${informacion.property}`)
    console.log(`Nota: ${informacion.note}`)

}else {
    console.log(`${esencia} no existe en la base de datos`)
}

}
mostrarInfoAceiteEsencial('Romero');

//Añadir la capacidad de buscar información de varios aceites esenciales a la vez

const mostrarInfoVariosAE = (esencias) => {
    //recorrer todos los nombres
    esencias.forEach(identificador =>{
        mostrarInfoAceiteEsencial(identificador);
    });
}

mostrarInfoVariosAE(['Lavanda', 'Romero', 'Eucalipto', 'Rosas'])