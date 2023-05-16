const PlayerController = require("../controllers/Player.controller")

module.exports = (app)=>{

    app.get("/api/players",PlayerController.getAllPlayer)
    app.post("/api/players", PlayerController.createPlayer)
    app.get("/api/players/:id", PlayerController.findOneSinglePlayer)
    app.delete("/api/players/:id", PlayerController.deletePlayer) 
    app.put("/api/players/:id", PlayerController.updateOnePlayer)
}