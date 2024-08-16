



const checkUserTypesMw = require(`../../src/utils/checkUserTypesMw.js`)
const {addCardsController} = require(`../controllers/addCardsController.js`)
const express = require(`express`)
const router = express.Router()
router.get (`/prueba`,(__,res)=>{
res.send(`bienvenido`)    
})
router.post(`/addcard`,checkUserTypesMw, addCardsController)
router.get	

//comentario
//otro comentario
module.exports = router;