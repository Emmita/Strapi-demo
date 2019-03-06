var exec = require("child_process").exec;
exec(
  'C:/"Program Files"/MongoDB/Server/4.0/bin/mongodump --db demo_database_two --out C:/Users/e-mjavila/Desktop',
  function(error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  }
);
