import { readdir, open, rm } from 'node:fs/promises';

try {
    await rm('./index.html'); 
    
    let buffer = '<!doctype html><html>';

    buffer += '<head><title>Pages</title></head>';

    buffer += '<body>';

    buffer += '<h1>Pages</h1>';
    buffer += '<ul>';

    const files = await readdir('.');
    files
        .filter((v) => v.endsWith('.html'))
        .forEach((v) => {
            buffer += `<li><a href='${v}'>${v}</a></li>`;
        });

    buffer += '</ul>';

    buffer += '</body></html>';

    const index = await open('./index.html', 'w');
    await index.write(buffer);

    await index.close();
} catch (err) {
    console.warn(err);
}

