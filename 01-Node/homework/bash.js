// pwd -- imprime directorio actual 
// date -- devuelve la fecha
// ls --- enlista archivos del directorio
//echo --me responde con la data ue ingrese
//cat -- devuelve todo el contenido de un archivo
// head -- devuelve primeras lineas
// tail -- devuelve ultimas lineas
// curl -- client url - mostrar cont de pag
const commands = require("./commands/index")

function done(output){
    process.stdout.write(output)
    process.stdout.write("\nprompt>: ");
    
}


process.stdout.write("prompt>");

process.stdin.on("data",function(data){
    var args = data.toString().trim().split(" ");
    var cmd = args.shift();

    if(!commands.hasOwnProperty(cmd)){
        process.stdout.write("Comando no encontrado")
    }
    else{commands[cmd](args,done);}
})
