const express = require('express');
const bodyParser = require('body-parser');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sockets_conectados = [];
var clientes = [];
var ganado = 0;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
server.listen(8080, () => console.log('Servidor iniciado en 8080'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/chat/:username', function (req, res) {
  res.sendFile(__dirname + '/public/chat.html');
});

var limite = 0;
var jug = 0;

app.post('/login', function (req, res) {
  let username = req.body.username;
  let id = req.body.id;
  let color = req.body.color;
  let arr = []
  arr.push(clientes);
  arr.push(0);
  console.log(jug);
  console.log(ganado);
  if(sockets_conectados.includes(id)){
    var index = arr.indexOf(0);
    if (index > -1) {
       arr.splice(index, 1);
       arr.push(1);
    }
    if(limite == 0){
      clientes.push({id: id, username: username,color:color});
      io.emit('socket_conectado', {id: id, username: username,color:color});
    }
  }
  if(ganado==1){
      jug = 0;
      limite = 0;
  }
  console.log(arr);
  return res.json(arr);
});

app.post('/send', function (req, res) {
  ganado = req.body.ganado;
  let username = req.body.username;
  let id = req.body.id;
  let color = req.body.color;
  let msg = req.body.text;
  let col = req.body.columna;
  let int = req.body.int;
  let pos = req.body.pos;
  let turno = req.body.turno;
  limite = req.body.limite;
  console.log(limite);
  io.emit('mensaje', {id: id, msg: msg, username: username,color:color,columna:col,int:int,pos:pos,turno:turno,limite:limite});
  return res.json({text: 'Mensaje enviado.'});
});

app.post('/ganado', function (req, res) {
  console.log('GANADOoo',ganado);
  ganado = req.body.ganado;
});

io.on('connection', socket => {
  console.log('Socket conectado', socket.id);
  if(jug <5){
  console.log(socket.id);
  sockets_conectados.push(socket.id);
  jug++;
  socket.on('disconnect', () => {
    var index = sockets_conectados.indexOf(socket.id);
    if (index > -1) {
        jug--;
        sockets_conectados.splice(index, 1);
    }
    console.log('Socket desconectado',socket.id);
    clientes = clientes.filter(cliente => cliente.id != socket.id);
    io.emit('socket_desconectado', {texto: 'Socket desconectado.', id: socket.id,lista:clientes});
    });
  }
});
