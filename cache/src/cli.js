const yargs = require('yargs');

const argv = yargs
    .option('port',{
        alias: 'p',
        describe: 'Port for the caching prxy server',
        type: 'number',
        demandOption: true,
    })
    .option('origin',{
        alias: 'o',
        describe: 'Url of origin server to send requests to',
        type: 'string',
        demandOption: true,
    })
    .option('clear-cache',{
        desribe: 'Clear the cache',
        type: 'boolean',
        default: false,
    })
    .argv;

module.exports = argv;