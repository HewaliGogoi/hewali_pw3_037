const SavingsAccount = require('../model/SavingsAccount');

async function createSavings(req, res){
    try {
        let savingsDetail = req.body;
        let response = await SavingsAccount.insertMany([savingsDetail]);
        let data = await SavingsAccount.find();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getSavings(req, res){
    try {
        let response = await SavingsAccount.find();
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {createSavings, getSavings};
