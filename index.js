const express = require('express')
const getClient = require('./client');

const app = express();

app.get('/', async (req, res) => {

    const client = getClient();
  
    // Criar um registro no elasticsearch
    const result = await client.index({
      index: 'elastic_teste',
      type: 'type_elastic_teste',
      body: {
        user: '',
        password: '',
        email: ''
      }
    });
  
    // Fazer uma busca
  
    return response.json(result);
  })
