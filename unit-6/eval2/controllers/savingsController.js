const SavingsAccount = require('../model/SavingsAccount');

async function createSavings(req, res){
    try {
        let savingsDetail = req.body;
        let response = await SavingsAccount.insertMany([savingsDetail]);
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {createSavings};
