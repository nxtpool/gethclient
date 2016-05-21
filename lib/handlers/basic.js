"use strict";
const assert = require('assert');
const spawn = require('child_process').spawn;
let gethpath = '';

const test = spawn('which', ['geth']);
test.stdout.on('data', (data) => { gethpath += data; });

test.on('close', (code) => {
  console.log(`which geth: ${gethpath}`);
  assert(gethpath.indexOf('geth')>=0, `geth command in system found was not`);
});

// geth --jspath "/root/gethscripts" --preload "sum.js" --exec "sum(2,3)" attach
const execFile = require('child_process').execFile;
const fs = require('fs');
const path = require('path');

//function exec 
module.exports = function(rootPath){
  return function (req, res) {
    const callpath = req.params[0].replace(/[\;\"\\\(\)]/g, "").split('/');
    const scope = callpath.shift();
    const task = callpath.shift();

    if (!scope || !task) return (res.send('Hello Kong!\n'+
      'Currently, awaiting 2+ parameters after /kong\n'));

    const onUnfulfillment = () => { res.send ("no such script"); }
    const onSuccess = () => {
      //execFile('geth',
      const l = [`--jspath`, `${rootPath}`, 
	`--preload`, `${scope}/${task}.js`,
        `--exec`, `${task}(${callpath.join(',')})`, `attach`]
      execFile('geth', l, (error, stdout, stderr) => {
	if (error) {
	  console.error(error);
	  console.log(`... while calling ${l}`);
	  res.status(500).end('Internal server error\n');
	}
	try {
	  JSON.parse(stdout);
          res.send(stdout);
	} catch (e) {
	  console.error(e);
	  console.log(`... while calling ${l}`);
          res.status(500).end('Internal server error\n');
	}
      })
    }
      
    
    const filepath = path.join(rootPath, scope, task+".js");
    fs.stat(filepath, (err, stats) => {
      if (stats) onSuccess();
      else onUnfulfillment() 
    });
  }
};


