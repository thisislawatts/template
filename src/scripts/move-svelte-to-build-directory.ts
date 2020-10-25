import glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';

glob('./src/**/*.svelte', (er, files) => {
  if (er) {
    console.log(er);
    return;
  }

  files.map((file) => {
    //
    const destFile = file.replace('/src/', '/build/');
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.copyFileSync(file, destFile);
  });
});
