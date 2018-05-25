const { lstatSync, readdirSync, readFileSync } = require('fs');
const fs_path = require('path');

const myGrep = () => {
  // USAGE: 'node myGrep.js <query> <subfolder>'
  let query = process.argv[2];
  let folder = process.argv[3];

  let fullPath = fs_path.join(__dirname, folder);
  // searchDirectory
  let filePaths = searchDirectory(fullPath, query, []);
  // return filePaths, log to console,
  let result = filePaths.join('\n');
  console.log(result);
}

const searchDirectory = (path, query, filePaths) => {
  let files = readdirSync(path);

  files.map((item) => {
    let newPath = fs_path.join(path, item);
    if (lstatSync(newPath).isDirectory()) {
      filePaths = filePaths.concat(searchDirectory(newPath, query, []));
    } else {
      let linenums = searchFileText(newPath, query);

      linenums.forEach((linenum) => {
        filePaths.push(`${newPath}:${linenum}`);
      })
    }
  })

  return filePaths;
}

const searchFileText = (path, query) => {
  let matches = [] // arr of linenums 
  let linenum = 1; 
  let text = readFileSync(path, 'utf-8');

  let queryPtr = 0; 

  for (let i = 0; i < text.length; i ++) {
    let char = text[i];
    if (char === '\n') {
      linenum++
      continue;
    }
    if (char === query[queryPtr]) {
      if (queryPtr === query.length - 1) {
        // store linenum
        matches.push(linenum);
        queryPtr = 0;
        continue; 
      }
      queryPtr++;
    } else {
      queryPtr = 0; 
    }
  }
   
  return matches
}

// albuquerque - this line was used for tests

myGrep();

// export for testing helper functions
module.exports.searchDirectory = searchDirectory;
module.exports.searchFileText = searchFileText;

// albuquerque - this line was used for tests