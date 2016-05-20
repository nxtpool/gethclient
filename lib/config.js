"use strict";
const defaultPath = '/etc/gethclient.yml';
module.exports = function config(pathToFile){
  const filepath = pathToFile || defaultPath;
  return require('yamljs').parseFile(filepath);
}
