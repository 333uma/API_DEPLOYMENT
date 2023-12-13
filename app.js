const sqlite3 = require('sqlite3');
const express = require('express');
const app = express();
let db = null;
const port = 4000;
const {open} = require('sqlite');
const path = require('path');
const dbPath = path.join(__dirname,'CricketTeam.db');

const initializeDBANDServer = async () => {
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        app.listen(port,() => {
            console.log("Server Running");
        });
    }
    catch(e){
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
}

initializeDBANDServer();

app.get("/players", async (request, response) => {
    const getPlayersQuery = `SELECT * FROM player`;
    const getPlayers = await db.all(getPlayersQuery);
    response.send(getPlayers);
});

app.get("/players/:id", async (request, response) => {
    const {id} = request.params;
    const getPlayerByIdQuery = `SELECT * FROM player where id = ${id}`;
    const getPlayerById = await db.get(getPlayerByIdQuery);
    response.send(getPlayerById);
});