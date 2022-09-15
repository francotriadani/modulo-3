var fs = require("fs");
const axios = require("axios")

module.exports = {
    pdw:function(args, done){
        done(process.cwd())
    },
    date:function(args,done){
        done(Date());
    },
    ls:function(args,done){
        fs.readdir(".","utf-8" ,function(err,files){
            if(err)throw err;
            files.forEach(file=>{
                process.stdout.write("\n"+ file);
            })
            process.stdout.write("\nprompt>");
        })
    },
    echo:function(args,done){
        done("\n"+ args.join(" ")+"\n");
    },
    cat:function(args,done){
        fs.readFile(args[0],"utf-8",function(err,file){
            if(err)throw err;
            done(file)
        })
    },
    head:function(args,done){
        fs.readFile(args[0],"utf-8",function(err,file){
            if(err)throw err;
            const line15 = file.split("\n").slice(0, 5);
            done("\n"+line15.join("\n"))
        })
    },
    tail:function(args,done){
        fs.readFile(args[0],"utf-8",function(err,file){
            if(err)throw err;
            const line15 = file.split("\n").slice(-5);
            done("\n"+line15.join("\n"))
        })
    },
    curl:function(args,done){
        axios(args[0])
        .then(data =>{
            done(data.data.toString());
        })
    },

}