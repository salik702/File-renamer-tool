const fs = require('fs');
const path = require('path');

const replaceThis = '';
const replaceWith = '';
const preview = false;
const folder = __dirname;

fs.readdir(folder, (err, files) => {
  if (err) return console.error('Error reading folder:', err);

  files.forEach((item) => {
    const oldFile = path.join(folder, item);
    const newFile = path.join(
      folder,
      item.replace(new RegExp(replaceThis, 'g'), replaceWith)
    );

    if (oldFile === newFile) return;
    if (preview) {
      console.log(`${item} will be renamed to ${path.basename(newFile)}`);
    } else {
      fs.rename(oldFile, newFile, (err) => {
        if (err) return console.error('Rename failed:', err);
        console.log('Renamed:', item, '->', path.basename(newFile));
      });
    }
  });
});
