const MasterAccount = require('../model/MasterAccount');

async function getMaster(req, res){
    try {
        let userId = req.params.id;
        let response = await MasterAccount.find({_id : userId});
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {getMaster};