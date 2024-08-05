



const { addUserService, getAllUserService, getUserByIdService, deleteUserService } = require("../service/userService");
const userModels = require("../models/userModels"); 

const addUserController = async (req, res) => {
    try {
        const newUser = await addUserService(req);
        return res.status(201).json(newUser); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const getAllUserController = async (req, res) => {
    try {
        const users = await getAllUserService();
        return res.status(200).json(users); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const userById = await getUserByIdService(id); 
        if (!userById) {
            return res.status(404).json({ message: "User not found" }); 
        }
        return res.status(200).json(userById); 
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
};

const deleteUserController = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserService(id); 
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


module.exports = {getUserByIdController, getAllUserController,
    
updateUserController, deleteUserController, adduserController};