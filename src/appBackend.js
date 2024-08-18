

const server= require ('./Server/server.js');	
const process= require ('./dotenv').config();    
const PORT = process.env.PORT || 3000;
server.listen((PORT, ()=>{
    console.log(`Server funcionando`);
}))
require ('./database/config');