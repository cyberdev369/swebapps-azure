// 🚨 Archivo de prueba intencionalmente vulnerable — NO USAR EN PROD 🚨

// 🔥 Hardcoded Secret (secret scanning)
const API_KEY = "sk_live_1234567890abcdefghijklmnopqrstuvwxyz";

// 🔥 SQL Injection (CodeQL detecta)
function vulnerableQuery(userInput, db) {
    // No está parametrizada – totalmente vulnerable
    const query = `SELECT * FROM users WHERE name = '${userInput}'`;
    return db.query(query);
}

// 🔥 Command Injection (CodeQL detecta)
const { exec } = require("child_process");
function runCommand(cmd) {
    exec("ping -c 1 " + cmd); // Vulnerable
}

// 🔥 XSS Injection
const http = require("http");
http.createServer((req, res) => {
    const param = req.url.replace("/", "");
    res.end(`Hola ${param}`); // Vulnerable a XSS
}).listen(3000);

console.log("Archivo vulnerable cargado.");
