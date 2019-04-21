const fs = require('fs');
const fgd = require('fgd');

async function convertToJson({ filepath }) {
    const content = await new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    return fgd.toJSON(content);
}

module.exports = {
    convertToJson
};