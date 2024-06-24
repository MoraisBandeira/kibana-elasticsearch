const elasticsearch = require('elasticsearch');

module.getClient = ()=>{
    const client = new elasticsearch.Client({
      host: 'localhost:9200',
    });
  
    return client;
  }

