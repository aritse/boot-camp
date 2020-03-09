const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function create() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "What is your location?"
      },
      {
        type: "input",
        name: "bio",
        message: "Tell about yourself (age, sex, hobby)"
      },
      {
        type: "input",
        name: "linkedin",
        message: "What is your LinkedIn username?"
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      }
    ]);

    //#region HTML
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="heading">
                        <div class="links">
                            <a href="https://www.linkedin.com/in/${response.linkedin}"><img src="linkedin.png" alt="linkedin"></a>
                            <a href="https://github.com/${response.github}"><img src="github.png" alt="github"></a>
                        </div>
                        <h1 id="name">${response.name}</h1>
                    </div>
                    <h2 id="location">${response.location}</h2>
                    <h3 id="bio">${response.bio}</h3>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
    //#endregion

    writeFileAsync("index.html", html)
      .then(() => console.log("Success"))
      .catch(err => console.log("Failure"));
  } catch (err) {
    console.log(err);
  }
}

create();
