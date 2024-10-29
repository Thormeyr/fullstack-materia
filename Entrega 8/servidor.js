require('colors');
console.log('Servidor iniciado'.rainbow);

var http = require('http');

var express = require('express');
const bodyParser = require('body-parser');



var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', function(req, res){
    res.redirect('Project.html');
});

app.get('/cadastra', function(req, res){
    let nome = req.query.cadastra_nome;
    let senha = req.query.cadastra_senha;
    console.log('Nome: ' + nome + ' Email: ' + emai + ' Senha: ' + senha);

    res.redirect('sucesso.html');

});


app.post('/cadastra', function(req, res){
    let nome = req.body.cadastra_nome;
    let senha = req.body.cadastra_senha;
    console.log('Nome: ' + nome + ' Senha: ' + senha);

    res.redirect('sucesso.html');

});

app.post('/login', function(req, res){
    let nome = req.body.login_login;
    let senha = req.body.login_senha;
    console.log('Nome: ' + nome + ' Senha: ' + senha);

    
    if(nome == "123" && senha == "123"){
        res.render('resposta.ejs', {resposta: "sucesso", mensagem: "Login efetuado com sucesso"});
    }
    else{
        res.render('resposta.ejs', {resposta: "erro", mensagem: "Login ou senha incorretos"});
    }
});

// app.get('/imprime', function(req, res){
//    let qtd = req.query.qtd;

//    res.render('imprime.ejs', {qtd: qtd});

// });



var server = http.createServer(app);

server.listen(80);


console.log('Servidor rodando'.rainbow);