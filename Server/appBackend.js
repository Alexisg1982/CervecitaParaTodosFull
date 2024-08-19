

const server= require ('./server.js');
const process= require ('./dotenv.js').config();
const PORT = process.env.PORT || 5000;
server.listen((PORT, ()=>{
    console.log(`Server funcionando`);
}))
require ('./database/config.js');