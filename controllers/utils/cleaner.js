const child_process = require("child_process")
const fs = require("fs");
const path = require("path");

function getFilesFromPath(path, extension) {
    let files = fs.readdirSync(path);
    files.forEach((file) => {
        if (file.match(new RegExp(`.*\.(${extension})`, 'ig'))) {
            console.log()
            child_process.execSync(`rm -rf ${path.join(process.cwd() + '/' + path + '/')}*.${extension}`)
        }
    });
}


if (process.argv.slice(2).length != 0) {
    const arguments = process.argv.slice(2);
    if (arguments == "compiled") {
        console.log("Removing the compiled files")
        getFilesFromPath("routes", "js")
    }
}