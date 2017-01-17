"use strict";
const defaultPath = '/etc/gethclient.yml';
module.exports = function config(pathToFile){

  const filepath = pathToFile || defaultPath;
  try {
    return require('yamljs').parseFile(filepath);
  } catch(e) {
    throw(new Error(`no file found at path ${filepath} or Yaml parse error`));
    //process.exit(1);
  }
}
