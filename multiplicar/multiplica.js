const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite)=>{
    console.log('======================='.green);
    console.log(`======tabla de ${base} =================`.green);
    console.log('======================='.green);
    
    for (let index = 1;index <= limite; index++){
        
        console.log(`${base} * ${index} = ${base*index}\n`);
    } 
}




let crearArchivo = (bases, limite )=>{
    return new Promise ((resolve,reject)=>{


        if(!Number(bases)){
            reject('el valor de la base no es un numero');
            return;
        }
        let data = "";

        for (let index = 1;index <= limite; index++){
            let multiplica = bases*index;
            data+=`${multiplica}\n`;
        } 

        fs.writeFile(`tablas/tabla${bases}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else (`tabla-${ bases}.txt`)
            
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
