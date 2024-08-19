const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


app.use(cors());

// Ruta adicional
app.get('/cervezas', (req, res) => {
  
    // res.send('Esta devolveria las cervezas (R de read en C.R.U.D.) ');
    res.json({
        items: cardsArray
    })
});
app.post('/cervezas', (req, res) => {
    res.send('aca es cuando hago post');
});



// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});



const cardsArray = [
    {
      title: 'Cerveza SLVDR',
      description: 'Sour Ale Frutilla & Mango 2,8% abv',
      imageUrl: '/assets/latanegrayblanca.png',
      precio: 196,
      id:'1',
    },
    {
      title: 'Cerveza Unidas',
      description: 'Malta de Rio Negro 6,5% abv',
      imageUrl: '/assets/numen8.png',
      precio: 100,
      id:'2',
    },
    {
    title: 'Cerveza Baba',
    description: 'Unicamente en la región de la Patagonia 4,8% abv',
    imageUrl: '/assets/numen2.png',
    precio: 150,
    id:'3',
    },
  {
    title: 'Cerveza Bombon Asesino',
    description: 'Un trago especial para los asesinos de la cevada 3,8% abv',
    imageUrl: '/assets/numen3.png',
    precio: 210,
    id:'4',
  },
  {
    title: 'Cerveza Juici Red',
    description: 'Jugo de frutas naturales malta y cevada 8,8% abv',
    imageUrl: '/assets/numen6.png',
    precio: 185,
    id:'5',
  },
  
  {
    title: 'Cerveza Ocaso',
    description: 'Tomar es una ocasión 5,5% abv',
    imageUrl: '/assets/numen7.png',
    precio: 205,
    id:'6',
  },
  
  {
    title: 'Cerveza Baba',
    description: 'Unicamente en la región de la Patagonia 4,8% abv',
    imageUrl: '/assets/numen2.png',
    precio: 150,
    id:'7',
    },
  {
    title: 'Cerveza Bombon Asesino',
    description: 'Un trago especial para los asesinos de la cevada 3,8% abv',
    imageUrl: '/assets/numen3.png',
    precio: 210,
    id:'8',
  },
  {
    title: 'Cerveza Juici Red',
    description: 'Jugo de frutas naturales malta y cevada 8,8% abv',
    imageUrl: '/assets/numen6.png',
    precio: 185,
    id:'9',
  },
  
  {
    title: 'Cerveza Ocaso',
    description: 'Tomar es una ocasión 5,5% abv',
    imageUrl: '/assets/numen7.png',
    precio: 205,
    id:'10',
  }
  
  
  ];