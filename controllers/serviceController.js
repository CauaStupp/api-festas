const { Service: ServiceModel } = require('../models/Service');

const serviceController = {

    create: async(req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
            const response = await ServiceModel.create(service);

            res.status(201).json({response, message: 'Serviço criado com sucesso'});
        } catch (error) {
            console.log('Erro - ' + error);
        }
    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({message: "Rota não encontrada"});
                return;
            }

            res.json(service);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({message: 'Erro ao deletar, ou objeto inexistente'});
                return;
            }

            const deleteService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({deleteService, message: 'Excluído com sucesso!'});
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };

        const updateService = await ServiceModel.findByIdAndUpdate(id, service);

        if (!updateService) {
            res.status(404).json({message: 'Error nas alterações dos dados.'});
            return;
        }

        res.status(200).json({service, message: "Dados atuazilado com sucesso!"})
    }
}

module.exports = serviceController;