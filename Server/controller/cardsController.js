



const { addCardsService, getAllCardsService, getCardsByIdService, deleteCardsService } = require("../service/cardsService");
const userModels = require("../models/userModels"); 

const addCardsController = async (req, res) => {
    try {
        const newUser = await addCardsService(req);
        return res.status(201).json(newUser); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const getAllCardsController = async (req, res) => {
    try {
        const users = await getAllCardsService();
        return res.status(200).json(users); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const getCardsByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const userById = await getCardsByIdService(id); 
        if (!userById) {
            return res.status(404).json({ message: "User not found" }); 
        }
        return res.status(200).json(userById); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const deleteCardsController = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteCardsService(id); 
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" }); 
        }
        return res.status(204).send(); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};


res.json (AllUser)
res.json(userById)
res.json (addUser)
res.json (deleteUser)


module.exports = {getCardsByIdController, getAllCardsController,
    
updateCardsController, deleteCardsController, addCardsController};