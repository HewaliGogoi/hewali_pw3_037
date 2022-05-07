const FixedAccount = require('../model/FixedAccount');

async function createFixed(req, res){
    try {
        let fixedDetail = req.body;
        let response = await FixedAccount.insertMany([fixedDetail]);
        res.json(response);
        // res.render('home', {name : "Hewali"})
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {createFixed};
