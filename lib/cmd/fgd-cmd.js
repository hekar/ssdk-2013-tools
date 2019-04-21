const fgd = require('../tool/fgd');

exports.command = 'fgd-to-json',
exports.desc = 'Convert an FGD file to JSON',
exports.builder = (yargs) => {
    yargs.demand('file')
};
exports.handler = async({ file }) => {
    await fgd.convertToJson({ filepath: file });
};