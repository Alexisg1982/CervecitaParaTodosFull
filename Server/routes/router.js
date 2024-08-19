



const midleWares = require(`../../src/utils/MidleWares.js`)
const {addCardsController} = require(`../controllers/addCardsController.js`)
const express = require(`express`)
const router = express.Router()
router.get (`/prueba`,(__,res)=>{
res.send(`bienvenido`)    
})
router.post(`/addcard`,midleWares, addCardsController)
router.get	

//comentario
//otro comentario
module.exports = router;