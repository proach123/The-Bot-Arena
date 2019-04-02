

module.exports = {

    showBots: (req, res) => {
        const db = req.app.get('db');
    
    db.show-bots-lv-1([]).then(resp => {
        res.status(200).send(resp)
    })
},


}