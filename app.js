const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { resolve } = require('path');

const employees = [];

function startApp() {
    startHTML();
    selectTask();
};

function selectTask() {
    inquirer.prompt([{
        type: "list",
        message: "Select which task you would like to perform",
        name: 'task',
        choices: ["Add a Team Member", "Quit"]
        }])
        .then(({ task }) => {
            if(task === "Add a Team Member") {
                return addMember();
            } else {
                return endHTML();
            }
        })
};


function addMember() {
    inquirer.prompt([{
        type: "input",
        message: "Please enter the new team member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Please select the new team member's role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Please enter the new team members' Employee ID.",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter the new member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}){
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub Username";
        } else if (role === "Manager") {
            roleInfo = "Office Phone Number";
        } else if (role === "Intern") {
            roleInfo = "University Name"
        }
        inquirer.prompt([{
            message: `Enter the team members' ${roleInfo}`,
            name: "roleInfo"
        }])
        .then(function({roleInfo, anotherNewMember}) {
            if (role === "Manager") {
                anotherNewMember = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
                anotherNewMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                anotherNewMember = new Intern(name, id, email, roleInfo);
            }
            employees.push(anotherNewMember)
            addHTML(anotherNewMember)
            inquirer.prompt([{
                type: "list",
                message: "Would you like to add more team members?",
                name: "anotherNewMember",
                choices: ["yes", "no"],
            }])
            .then(({ anotherNewMember }) => {
                if(anotherNewMember === "yes") {
                    return addMember();
                } else {
                    return endHTML();
                }
            });
        });
    })
}

function startHTML() {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <META HTTP-EQUIV="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        crossorigin="anonymous" link rel="stylesheet">
        <title>C&M Music Shop</title>
    </head>
    <body>
    <!-- Navbar to display company name at top of page -->
    <nav class="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center">C & M Music Shop - Rampart Street - New Orleans</span>
    </nav>
    <!-- Container elements for Employee info, displayed as cards -->
    <div class="container">
        <div class="row">`
    fs.writeFile("./output/index.html", HTML, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Welcome to Team Profile Generator!");
}

function addHTML(anotherNewMember) {
    return new Promise(function(res, rej) {
        const name = anotherNewMember.getName();
        const id = anotherNewMember.getId();
        const role = anotherNewMember.getRole();
        const email = anotherNewMember.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = anotherNewMember.getOfficeNumber();
            data = `<div class="col-sm-4">
            <div class="card mx-auto mb-5">
            <h3 class="card-header">${name}<br>Facility Manager</h3>
            <ul class="list-group">
                <li class="ulListItem">Employee ID: ${id}</li>
                <li class="ulListItem">Employee Email: ${email}</li>
                <li class="ulListItem">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
           </div>`;
        } else if (role === "Engineer") {
            const gitHub = anotherNewMember.getGitHub();
            data = `<div class="col-sm-4">
            <div class="card mx-auto mb-5">
            <h3 class="card-header">${name}<br>Reverse Logistics Engineer</h3>
            <ul class="list-group">
            <li class="ulListItem">Employee ID: ${id}</li>
            <li class="ulListItem">Employee Email: ${email}</li>
            <li class="ulListItem">Employee GitHub: ${gitHub}</li>
        </ul>
        </div>
        </div`;
        } else {
            const school = anotherNewMember.getSchool();
            data = `<div class="col-sm-4">
            <div class="card mx-auto mb-5">
            <h3 class="card-header">${name}<br>Sales Intern</div>
            <ul class="list-group">
                <li class="ulListItem">Employee ID: ${id}</li>
                <li class="ulListItem">Empoyee Email: ${email}</li>
                <li class="ulListItem">Employee School: ${school}</li>                
            </ul>
            </div>
           </div>`;
        } console.log("Adding your new team member!");
        fs.appendFile("./output/index.html", data, function (err) {
            if (err) {
                console.log(err);
            };
            return resolve();
        });
    });
};

function endHTML() {
    const HTML = `</div>
            </div>
        </body>
        </html>`;
        
    fs.appendFile("./output/index.html", HTML, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Profile Complete!")
};

startApp();