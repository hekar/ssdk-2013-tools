const path = require('path');
const test = require('ava');
const fgd = require('../../../lib/tool/fgd');

test('fgd without includes is converted to json', async t => {
    const json = await fgd.convertToJson({
        filepath: path.join(__dirname, 'fgd-with-includes.fgd')
    });
});