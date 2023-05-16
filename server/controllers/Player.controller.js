const Player=require('../models/Player.model');

module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(players => {
            console.log(players); 
            response.json(players);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(player => res.json(player))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}


module.exports.createPlayer = (request, response) => {
    const { playerName, preferredPosition } = request.body;    
    Player.create({
            playerName: playerName,
            preferredPosition: preferredPosition
        })
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err))
    }


module.exports.updateOnePlayer = (req,res)=>{
    Player.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators: true })
    .then(updatedPlayer=>{
        console.log("SERVER SUCCESS (UPDATE)✅✅");
        res.json(updatedPlayer)
    })
    .catch(err=>{
        console.log("SERVER ERROR (UPDATE) ❌❌❌");
        res.json(err)
    })
}

module.exports.deletePlayer= (request, response) => {
    Player.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => 
            {console.log(_id);
            response.json(deleteConfirmation);
        }
            )
        .catch(err => response.json(err))
}






