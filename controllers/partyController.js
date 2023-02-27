const PartyModel = require('../models/Party');

const checkBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) {
        return false;
    } return true;
}

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            if (party.services && !checkBudget(party.budget, party.services)) {
                res.status(406).json({message: 'O seu orçamento é insuficiente!'});
                return;
            }

            const response = await PartyModel.create(party);
            res.status(201).json({response, message: 'Festa criada com sucesso!'});
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();
            if (!parties) {
                res.status(404).json({message: 'Festas não encontradas.'});
                return;
            }

            res.json(parties);
        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if (!party) {
                res.status(404).json({message: 'Festa não encontrada.'});
                return;
            }

            res.json(party);
        } catch (error) {
            console.log(error);
        }
    }, 
    
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if (!party) {
                res.status(404).json({message: 'Festa não encontrada.'});
                return;
            }

            const deleteParty = await PartyModel.findByIdAndDelete(id);

            res.status(200).json({deleteParty, message: 'Festa excluída com sucesso!'});
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            if (party.services && !checkBudget(party.budget, party.services)) {
                res.status(406).json({message: 'O seu orçamento é insuficiente.'});
                return;
            }

            const updateParty = await PartyModel.findByIdAndUpdate(id, party);

            if (!updateParty) {
                res.status(404).json({message: 'Festa não encontrada'});
                return;
            }

            res.status(200).json({party, message: 'Festa alterada com sucesso!'});
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = partyController;