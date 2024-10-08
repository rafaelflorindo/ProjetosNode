// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// criação do servidor express
const app = express();

// aplicar configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB local (tempo de execução)
const data = [];

// criação de rota que será acessada utilizando o método HTTP GET/
// http://localhost:9000/
app.get('/', (req, res) => {
  return res.json({ data });
});

//criação de rota para trabalhar com parâmetro
app.get('/teste/:opcao/:id', (req, res) => {
   // res.send("Opção: " + req.params.opcao + "ID: " + req.params.id);

    const teste = [
        {
            "opcao" : req.params.opcao,
            "id" : req.params.id
        }
    ]
    return res.json({ teste });
  });

// criação de rota que será acessada utilizando o método HTTP POST/
// http://localhost:9000/add
app.post('/add', (req, res) => {
  const result = req.body;

  if (!result) {
    return res.status(400).end();
  }

  data.push(result);
  return res.json({ result });
});

// o servidor irá rodar dentro da porta 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));