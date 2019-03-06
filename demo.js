var os = process.platform;
var exec = require("child_process").exec;

if(os === 'linux'){
  exec(
    'sudo mongodump --db demo_database --out /home/emma/Documents',
    function(error, stdout, stderr) {
      console.log(os);
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
    }
  );

}else if(os === 'win32'){
  exec(
    'C:/"Program Files"/MongoDB/Server/4.0/bin/mongodump --db demo_database --out C:/Users/e-mjavila/Documents',
    function(error, stdout, stderr) {
      console.log(os);
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
      if (error !== null) {
        console.log("exec error: " + error);
      }
    }
  );

}




