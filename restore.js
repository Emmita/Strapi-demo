var os = process.platform;
var exec = require("child_process").exec;

if(os === "linux"){
    exec(
    "sudo mongorestore --drop -d demo_database ./demo_database",
    function(error, stdout ,stderr){
        if(error !== null){
            console.log("exec error: " + error );
        }

        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
    }
);
}else if(os === "win32"){
    exec(
        'C:/"Program Files"/MongoDB/Server/4.0/bin/mongorestore --drop --db demo_database ./demo_database',
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

