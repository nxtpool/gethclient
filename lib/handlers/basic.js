// geth --jspath "/root/gethscripts" --preload "sum.js" --exec "sum(2,3)" attach
const fs = require('fs');
const path = require('path');

//function exec 

module.exports = function(rootPath){
  return function (req, res) {
    console.log(req.query);
    const callpath = req.params[0].split('/');
    const scope = callpath.shift();
    const task = callpath.shift();

    if (!scope || !task) return (res.send('Hello Kong!\n'+
      'Currently, awaiting 2+ parameters after /kong\n'));

    const filepath = path.join(rootPath, scope, task+".js");
  
    function onUnfulfillment(){
      res.send ("no such script");
    }
    function onSuccess(){
      if (req.query){
	res.send(JSON.stringify(req.query));
      } else res.send('evaluating'); 
    }  

    fs.stat(filepath, function(err, stats) {
      if (stats) onSuccess();
      else onUnfulfillment() 
    });
  }
};


