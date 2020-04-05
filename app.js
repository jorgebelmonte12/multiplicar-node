const argv = require('./config/yargs').argv;

const multiplicar = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');

        multiplicar.listarTabla(argv.base, argv.limite).then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

        break;

    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado ${archivo}`);
            }).catch(err => {
                console.log(err);
            });

        break;

    default:
        console.log('Comando no reconocido');

}

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);