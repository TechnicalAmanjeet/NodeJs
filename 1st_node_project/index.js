// will start working on fs module of javascript.

const fs = require('fs');
const process = require('process');

// console.log(process.argv);

// fs.writeFileSync("amanjeet.txt", "how are you guys");
// const content  = fs.readFileSync("amanjeet.txt", 'utf-8');
// console.log(content);

const userArgument = process.argv; // it will give the nodes dir path , current file path and argument given by user at the time of running.

// so now i will be creating a program which create , delete , read and update data of new file.

if(userArgument[2] == 'create'){
    fs.writeFileSync(userArgument[3], userArgument[4]);
    console.log("like share and subscribe.");
}else if(userArgument[2] == 'delete'){
    fs.unlinkSync(userArgument[3]);
    console.log(`${userArgument[3]} named file deleted.`);
}
else if(userArgument[2] == 'read'){
    console.log(`Data in ${userArgument[2]} is as => `);
    console.log(fs.readFileSync(userArgument[3], 'utf-8'));
}
else if(userArgument[2] == 'rename'){
    fs.renameSync(userArgument[3], userArgument[4]);
    console.log(`filename ${userArgument[3]} renamed to ${userArgument[4]}`);
}
else{
    console.log("wrong choice.");
}