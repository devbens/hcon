exports.command = 'hosts [command]';
exports.desc = 'Hosts file commands: add, remove, list (hih help hosts)';
exports.builder = function(yargs) {
    return yargs
        .options({})
        .commandDir('hosts');
};
exports.handler = function(argv) {};