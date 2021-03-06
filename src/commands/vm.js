const os = require('os');

/**
 * If Linux Do Not Allow To Run VM Commands.
 */
if (os.platform() == 'linux') {
    return;
}

exports.command = 'vm [command]';
exports.desc = 'Manage Hcon VM (hih help vm)';
exports.builder = function(yargs) {
    return yargs
        .commandDir('vm');
};
exports.handler = function(argv) {};