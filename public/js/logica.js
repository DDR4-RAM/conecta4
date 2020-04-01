var socket = io.connect('http://localhost:8080');
var list = document.querySelector('#lista-users');
var username = window.location.pathname.replace('/chat/', '');
var color = getRandomColor();
var clientes = [];
var turno = 0;
var validad=0;
var limite = 0;
var gan = 0;
var empezo = 0;
var g = 0;
var juego = [{col:'colu1',int:[0,0,0,0,0,0,0],pos:0},{col:'colu2',int:[0,0,0,0,0,0,0],pos:0},{col:'colu3',int:[0,0,0,0,0,0,0],pos:0},{col:'colu4',int:[0,0,0,0,0,0,0],pos:0},{col:'colu5',int:[0,0,0,0,0,0,0],pos:0},{col:'colu6',int:[0,0,0,0,0,0,0],pos:0},{col:'colu7',int:[0,0,0,0,0,0,0],pos:0}]

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function conectarJuego() {
  var id = socket.id;
  console.log('id:', socket.id, 'useranme:', username,'color:',color,'gan',gan);
  $.post('/login', {username: username, id: id,color:color}, function (data) {
    clientes = data[0];
    val = data[1];
    console.log(clientes)
    var butin = document.querySelector('#butini');
    butin.innerHTML = "Se ha llenado la partida";
    //list.innerHTML += 'Cargando...';
    var html = '';
    if(val == 1){
    clientes.forEach(function (cliente) {
      html += '<li>' + cliente.username +' <div class="color" style="background-color: '+ cliente.color +';"></div></li>';
    });
    list.innerHTML = html;
    clientuno = clientes[0];
    if(clientuno['username'] == username){
      var myDiv = document.getElementById("inicio");
      var button = document.createElement('button');
      document.body.appendChild(button);  
      var button = document.createElement('BUTTON');  
      button.onclick = function(){empezarJuego();return false;};
      var text = document.createTextNode("INICIAR JUEGO"); 
      button.appendChild(text); 
      myDiv.appendChild(button); 
    }
    $('.loader').hide();
    }
  });
}

function empezarJuego(){
  clientuno = clientes[0];
    if(clientuno['username'] == username){
      empezo = 1;
      turno = 0;
      limite = 1;
      var myDiv = document.getElementById("columna1");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna2");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila2");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna3");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila3");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna4");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila4");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna5");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila5");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna6");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila6");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna7");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila7");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
       /*document.getElementById('fila').disabled = false;
       document.getElementById('fila2').disabled = false;
       document.getElementById('fila3').disabled = false;
       document.getElementById('fila4').disabled = false;
       document.getElementById('fila5').disabled = false;
       document.getElementById('fila6').disabled = false;
       document.getElementById('fila7').disabled = false;
       */
       var elem = document.getElementById('inicio');
       elem.parentNode.removeChild(elem);
    }
}

function pasaturno(){
       var elem = document.getElementById('fila');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila2');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila3');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila4');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila5');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila6');
       elem.parentNode.removeChild(elem);
       elem = document.getElementById('fila7');
       elem.parentNode.removeChild(elem);
}

function entraturno(){
  /*
       document.getElementById('fila2').disabled = false;
       document.getElementById('fila3').disabled = false;
       document.getElementById('fila4').disabled = false;
       document.getElementById('fila5').disabled = false;
       document.getElementById('fila6').disabled = false;
       document.getElementById('fila7').disabled = false;
       */
      clientuno = clientes[0];
      if(clientuno['username'] == username && empezo == 0){
      }else{
      var myDiv = document.getElementById("columna1");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna2");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila2");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna3");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila3");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna4");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila4");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna5");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila5");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna6");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila6");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
      var myDiv = document.getElementById("columna7");
      var button = document.createElement('button');
      button.classList.add("boton_personalizado");
      button.setAttribute("id", "fila7");
      document.body.appendChild(button);  
      button.onclick = function(){tirarFicha(this.id);return false;};
      var text = document.createTextNode("Tirar"); 
      button.appendChild(text); 
      myDiv.appendChild(button);
    }
}


function tirarFicha(fila) {
  if(g == 0){
  var msg = fila;
  var columna;
  console.log(limite);
  if(fila == 'fila'){
    columna = juego[0];
    var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu1',int:colu,pos:pos};
  }else if(fila == 'fila2'){
    columna = juego[1];
    var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu2',int:colu,pos:pos};
  }else if(fila == 'fila3'){
    columna = juego[2];
    var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu3',int:colu,pos:pos};
  }else if(fila == 'fila4'){
    columna = juego[3];
    var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu4',int:colu,pos:pos};
  }else if(fila == 'fila5'){
    columna = juego[4];
     var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu5',int:colu,pos:pos};
  }else if(fila == 'fila6'){
    columna = juego[5];
    var colu = columna['int'];
    var pos = 0;
    var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu6',int:colu,pos:pos};
  }else if(fila == 'fila7'){
    columna = juego[6];
    var colu = columna['int'];
    var pos = 0;
   var x=0;
    for (var i = 0; i < colu.length; i++) {
        if(colu[i] == 0){
          colu[i] = 1;
          pos = i;
          break;
        }
        x++;
    }
    if(x == colu.length && pos == 0){
      pos = 10;
    }
    columna = {col:'colu7',int:colu,pos:pos};
  }
  clientuno = clientes[0];
    if(clientuno['username'] == username){
      if(validad == 0){
      turno++;
      validad = 1;
      }
    }
    var ganado = 0;
  pasaturno();
  if (msg.length <= 0) return;
  $.post('/send', {
    text: msg,
    username: username,
    id: socket.id,
    color: color,
    columna: columna['col'],
    int: columna['int'].join(),
    pos:columna['pos'],
    turno:turno,
    limite:limite,
    ganado:ganado
  }, function (data) {
    //document.querySelector('#input').value = '';
  });
    }

}

function ganar(colors){
  var colu1 = juego[0];
  var colu2 = juego[1];
  var colu3 = juego[2];
  var colu4 = juego[3];
  var colu5 = juego[4];
  var colu6 = juego[5];
  var colu7 = juego[6];
  var int1 = colu1['int'];
  var int2 = colu2['int'];
  var int3 = colu3['int'];
  var int4 = colu4['int'];
  var int5 = colu5['int'];
  var int6 = colu6['int'];
  var int7 = colu7['int'];
  var ganado = 0;

  for (var i = 0; i < 6; i++) {
  if(int1[i] == colors && int2[i] == colors && int3[i] == colors && int4[i] == colors){
    return colors;
  }else if(int2[i] == colors && int3[i] == colors && int4[i] == colors && int5[i] == colors){
    return colors;
  }else if(int3[i] == colors && int4[i] == colors && int5[i] == colors && int6[i] == colors){
    return colors;
  }else if(int4[i] == colors && int5[i] == colors && int6[i] == colors && int7[i] == colors){
    return colors;
  }
  }
  if(int1[0] == colors && int1[1] == colors && int1[2] == colors && int1[3] == colors){
    return colors;
  }else if(int1[1] == colors && int1[2] == colors && int1[3] == colors && int1[4] == colors){
    return colors;
  }else if(int1[2] == colors && int1[3] == colors && int1[4] == colors && int1[5] == colors){
    return colors;
  }

  if(int2[0] == colors && int2[1] == colors && int2[2] == colors && int2[3] == colors){
    return colors;
  }else if(int2[1] == colors && int2[2] == colors && int2[3] == colors && int2[4] == colors){
    return colors;
  }else if(int2[2] == colors && int2[3] == colors && int2[4] == colors && int2[5] == colors){
    return colors;
  }
  if(int3[0] == colors && int3[1] == colors && int3[2] == colors && int3[3] == colors){
    return colors;
  }else if(int3[1] == colors && int3[2] == colors && int3[3] == colors && int3[4] == colors){
    return colors;
  }else if(int3[2] == colors && int3[3] == colors && int3[4] == colors && int3[5] == colors){
    return colors;
  }
  if(int4[0] == colors && int4[1] == colors && int4[2] == colors && int4[3] == colors){
    return colors;
  }else if(int4[1] == colors && int4[2] == colors && int4[3] == colors && int4[4] == colors){
    return colors;
  }else if(int4[2] == colors && int4[3] == colors && int4[4] == colors && int4[5] == colors){
    return colors;
  }
  if(int5[0] == colors && int5[1] == colors && int5[2] == colors && int5[3] == colors){
    return colors;
  }else if(int5[1] == colors && int5[2] == colors && int5[3] == colors && int5[4] == colors){
    return colors;
  }else if(int5[2] == colors && int5[3] == colors && int5[4] == colors && int5[5] == colors){
    return colors;
  }
  if(int6[0] == colors && int6[1] == colors && int6[2] == colors && int6[3] == colors){
    return colors;
  }else if(int6[1] == colors && int6[2] == colors && int6[3] == colors && int6[4] == colors){
    return colors;
  }else if(int6[2] == colors && int6[3] == colors && int6[4] == colors && int6[5] == colors){
    return colors;
  }
  if(int7[0] == colors && int7[1] == colors && int7[2] == colors && int7[3] == colors){
    return colors;
  }else if(int7[1] == colors && int7[2] == colors && int7[3] == colors && int7[4] == colors){
    return colors;
  }else if(int7[2] == colors && int7[3] == colors && int7[4] == colors && int7[5] == colors){
    return colors;
  }


  if(int1[2] == colors && int2[3] == colors  && int3[4] == colors  && int4[5] == colors){
    return colors;
  }else if(int1[1] == colors && int2[2] == colors  && int3[3] == colors  && int4[4] == colors){
    return colors;
  }else if(int2[2] == colors && int3[3] == colors  && int4[4] == colors  && int5[5] == colors){
    return colors;
  }else if(int1[0] == colors && int2[1] == colors  && int3[2] == colors  && int4[3] == colors){
    return colors;
  }else if(int2[1] == colors && int3[2] == colors  && int4[3] == colors  && int5[4] == colors){
    return colors;
  }else if(int3[2] == colors && int4[3] == colors  && int5[4] == colors  && int6[5] == colors){
    return colors;
  }else if(int2[0] == colors && int3[1] == colors  && int4[2] == colors  && int5[3] == colors){
    return colors;
  }else if(int3[1] == colors && int4[2] == colors  && int5[3] == colors  && int6[4] == colors){
    return colors;
  }else if(int4[2] == colors && int5[3] == colors  && int6[4] == colors  && int7[5] == colors){
    return colors;
  }else if(int3[0] == colors && int4[1] == colors  && int5[2] == colors  && int6[3] == colors){
    return colors;
  }else if(int4[1] == colors && int5[2] == colors  && int6[3] == colors  && int7[4] == colors){
    return colors;
  }else if(int4[0] == colors && int5[1] == colors  && int6[2] == colors  && int7[3] == colors){
    return colors;
  }

  if(int1[3] == colors && int2[2] == colors  && int3[1] == colors  && int4[0] == colors){
    return colors;
  }else if(int5[0] == colors && int4[1] == colors  && int3[2] == colors  && int2[3] == colors){
    return colors;
  }else if(int4[1] == colors && int3[2] == colors  && int2[3] == colors  && int1[4] == colors){
    return colors;
  }else if(int6[0] == colors && int5[1] == colors  && int4[2] == colors  && int3[3] == colors){
    return colors;
  }else if(int5[1] == colors && int4[2] == colors  && int3[3] == colors  && int2[4] == colors){
    return colors;
  }else if(int4[2] == colors && int3[3] == colors  && int2[4] == colors  && int1[5] == colors){
    return colors;
  }else if(int7[0] == colors && int6[1] == colors  && int5[2] == colors  && int4[3] == colors){
    return colors;
  }else if(int6[1] == colors && int5[2] == colors  && int4[3] == colors  && int3[4] == colors){
    return colors;
  }else if(int5[2] == colors && int4[3] == colors  && int3[4] == colors  && int2[5] == colors){
    return colors;
  }else if(int7[1] == colors && int6[2] == colors  && int5[3] == colors  && int4[4] == colors){
    return colors;
  }else if(int6[2] == colors && int5[3] == colors  && int4[4] == colors  && int3[5] == colors){
    return colors;
  }else if(int7[2] == colors && int6[3] == colors  && int5[4] == colors  && int4[5] == colors){
    return colors;
  }
  return ganado;
}

function setJuego(columna,pos,int,color){
var intl = int.split(",");
if(columna == 'colu1'){
  var jug = juego[0];
  if(pos == 0){
    var but = document.getElementById('boton36');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton29');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton22');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton15');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton8');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton1');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu2'){
 var jug = juego[1];
  if(pos == 0){
    var but = document.getElementById('boton37');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton30');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton23');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton16');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton9');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton2');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu3'){
 var jug = juego[2];
  if(pos == 0){
    var but = document.getElementById('boton38');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton31');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton24');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton17');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton10');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton3');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu4'){
  var jug = juego[3];
  if(pos == 0){
    var but = document.getElementById('boton39');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton32');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton25');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton18');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton11');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton4');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu5'){
  var jug = juego[4];
  if(pos == 0){
    var but = document.getElementById('boton40');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton33');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton26');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton19');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton12');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton5');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu6'){
  var jug = juego[5];
  if(pos == 0){
    var but = document.getElementById('boton41');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton34');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton27');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton20');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton13');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton6');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
}else if(columna == 'colu7'){
  var jug = juego[6];
  
  if(pos == 0){
    var but = document.getElementById('boton42');
    but.style.backgroundColor = color;
    intl[0] = color;
  }else if(pos == 1){
    var but = document.getElementById('boton35');
    but.style.backgroundColor = color;
    intl[1] = color;
  }else if(pos == 2){
    var but = document.getElementById('boton28');
    but.style.backgroundColor = color;
    intl[2] = color;
  }else if(pos == 3){
    var but = document.getElementById('boton21');
    but.style.backgroundColor = color;
    intl[3] = color;
  }else if(pos == 4){
    var but = document.getElementById('boton14');
    but.style.backgroundColor = color;
    intl[4] = color;
  }else if(pos == 5){
    var but = document.getElementById('boton7');
    but.style.backgroundColor = color;
    intl[5] = color;
  }
  jug['int'] = intl;
  }
  var ganado = ganar(color);
  if(ganado == 0){
    return 0;
  }else{
    return ganado;
  }
}


socket.on('mensaje', function (data) {
  /*console.log('Turno');
  console.log(data.turno);
  var desc = data.turno;
  if(desc == -10){
    turno--;
    if(turno == -1){
    turno == 0;
    }
  }else{*/
  turno = data.turno;
  var columna = data.columna;
  var int = data.int;
  var pos = data.pos;
  limite = data.limite;
  if (data.id == socket.id) {
    var ganado = setJuego(columna,pos,int,data.color);
    if(ganado != 0){
      console.log('GANAR');
     console.log('GANAR');
    $.post('/ganado', {ganado:1}, function (data) {
    });
      gan = 1;
      turno = 0;
      limite = 0;
      g = ganado;
      var nombre = "";
        for (var i = 0; i < clientes.length; i++) {
      var cliente = clientes[i];
          if(cliente.color == ganado){
            nombre = cliente.username;
            break;
          }
       }

     var msj = `
    <div class="local-message">
      Gano:<br><strong> ${nombre} </strong>
    </div>
    `;
     document.querySelector('.mensajes-container').innerHTML += msj;
      pasaturno();
      console.log('GANAR');
    }else{
    checarturno();
   }
  } else {
     var ganado = setJuego(columna,pos,int,data.color);
      var msj;
    if(ganado != 0){
      console.log('GANAR');
      console.log('GANAR');
  $.post('/ganado', {ganado:1}, function (data) {
  });
      gan = 1;
      turno = 0;
      limite = 0;
      g = ganado;
      var nombre = "";
        for (var i = 0; i < clientes.length; i++) {
      var cliente = clientes[i];
          if(cliente.color == ganado){
            nombre = cliente.username;
            break;
          }
       }

    var msj = `
    <div class="local-message">
      Gano:<br><strong> ${nombre} </strong>
    </div>
    `;
     document.querySelector('.mensajes-container').innerHTML += msj;
     pasaturno();
    }else{
    checarturno();
     }
  }
  //}
})

var vala= 0;
function checarturno(){
    var c =0;
    var len = clientes.length -1;
    for (var i = 0; i < clientes.length; i++) {
      var cliente = clientes[i];
          if(cliente['id'] == socket.id){
            break;
          }
          c++;
       }
      if(c == turno){
        turno++;
        if(turno > len){
          turno = 0;
        }
        entraturno();
       }
    }

socket.on('socket_desconectado', function (data) {
  clientes = clientes.filter(function (cliente) {
  console.log('Cliente',cliente);
  console.log('Turno',turno);
  clientes = data.lista;
  console.log(clientes);
  if(vala == 0){
  turno = turno-1;
  console.log('Entra');
  checarturno();
  }
  vala++;
  if(vala == 3){
    vala=0;
  }
  return cliente.id != data.id;
  });
  list.innerHTML += 'Cargando...';
  var html = '';
  clientes.forEach(function (cliente) {
    html += '<li>' + cliente.username +' <div class="color" style="background-color: '+ cliente.color +';"></div></li>';
  });
  list.innerHTML = html;
});

socket.on('socket_conectado', function (data) {
  clientes.push(data);
  list.innerHTML += 'Cargando...';
  var html = '';
  clientes.forEach(function (cliente) {
    html += '<li>' + cliente.username +' <div class="color" style="background-color: '+ cliente.color +';"></div></li>';
  });
  list.innerHTML = html;
});
