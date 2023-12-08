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
        scientistName:['Eucaliptus Globulus', 'Analgésico'],
        note: 'alta'
    },
    'Romero': {
        scientistName:'Rosmarinus oficinalis',
        property:['Repelente de insectos', 'Antiinflamatorio'],
        note: 'alta'
    }
}

//función: mostrar información del aceite esencia

function mostrarInfoAceiteEsencial(esencia){
//comprobar si la esencia está dentro de la información c on el if
console.log(`##### ${esencia} ######`)

if(esencia in infoAceitesEsenciales){
    //se hace una constante para sacar la información

    const informacion = infoAceitesEsenciales[esencia];
    //Mostrar la información
    console.log(`Nombre científico: ${informacion.scientistName}`)
    console.log(`Propiedades: ${informacion.property.join(', ')}`)
    console.log(`Nota: ${informacion.note}`)

}else {
    console.log(`${esencia} no existe en la base de datos`)
}

}
mostrarInfoAceiteEsencial('Lavanda');

//Añadir la capacidad de buscar información de varios aceites esenciales a la vez

const mostrarInfoAceiteEsencial = (esencias) =>{
    //recirre tidis los nombres
    esencias.forEach(esencia => {
        mostrarInfoAceiteEsencial(esencia)
    })
}

mostrarInfoAceiteEsencial(['Lavanda', 'Romero', 'Eucalipto', 'Rosas'])