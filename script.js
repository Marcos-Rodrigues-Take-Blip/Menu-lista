const menuDescricao = document.getElementById('menu-descricao');
const menuInput = document.getElementById('menu-input');


function pronto(){
//--------------input (2)----------------
const menuInput = document.getElementById('menu-input');
const botao = document.getElementById('botao');


menuInput.style.display = 'none';
botao.remove();

// Selecionar o elemento pai onde os novos elementos serão adicionados
const txtDiv = document.getElementById('txt');
menuDescricao.innerHTML = "Agora digite o <b>titulo do botão pricial<b>";
//cria novo titulo


// Criar o novo campo de input
const novoInputBT = document.createElement('input');
novoInputBT.id = 'botaoListID'
novoInputBT.type = 'text';
novoInputBT.title = 'Digite aqui';
novoInputBT.oninput = function() {
  if (this.value.length > 20) {
    this.value = this.value.slice(0, 20);
  }
};


const novoBotao = document.createElement('input');
novoBotao.id = 'botãoID'
novoBotao.type = 'button';
novoBotao.value = 'Pronto!';
novoBotao.onclick = descricaoList;

txtDiv.appendChild(novoInputBT);
txtDiv.appendChild(novoBotao);

// altera a imagem
var imagem = document.querySelector('img');
imagem.src = '/titulo botão principal.png';

}

//------------------------------ mais um input (3)-------------------
function descricaoList(){
    
   const botaoMenuPrincil = document.getElementById('botaoListID').value
   

    const menuListInput = document.getElementById('botaoListID');
    const botao = document.getElementById('botãoID');

    menuListInput.style.display = 'none';
    botao.remove();

    menuDescricao.innerHTML = "Agora digite o <b>titulo da lista do menu<b>";

    const txtDiv = document.getElementById('txt');

    const novoInputDesc = document.createElement('input');
        novoInputDesc.id = 'descricaoListID'
        novoInputDesc.type = 'text';
        novoInputDesc.value = 'LISTA DE OPÇÕES'
        novoInputDesc.title = 'Digite aqui';
        novoInputDesc.oninput = function() {
            if (this.value.length > 20) {
                this.value = this.value.slice(0, 20);
                }
        };
    const novoBotao = document.createElement('input');
    novoBotao.id = 'botãoID'
    novoBotao.type = 'button';
    novoBotao.value = 'Pronto!';
    novoBotao.onclick = options;

    txtDiv.appendChild(novoInputDesc);
    txtDiv.appendChild(novoBotao);

    var imagem = document.querySelector('img');
    imagem.src = '/titulo das opções.png';
}

// crie a variável divInputs fora das funções
var divInputs;
var quantidade = 1
function options() {   
    // Crie um elemento de quebra de linha
var br = document.createElement("br");

// Adicione o elemento de quebra de linha à div "dd"
document.getElementById("dd").appendChild(br);


    const menuListInput = document.getElementById('descricaoListID');
    const botao = document.getElementById('botãoID');
    
    var imagem = document.querySelector('img');
    imagem.src = '/opções - titulos e descricao.png';
    menuDescricao.innerHTML = "Agora digite o <b>Título</b> e a <b>Descrição</b> do seu menu";

    menuListInput.style.display = 'none';
    botao.remove();

    // atribua o valor à variável divInputs
    divInputs = document.getElementById('dd');
    divInputs.style.display = 'inline-block';

    // crie o primeiro label e input
    var label1 = document.createElement('label');
    label1.innerHTML = "Título:";
    label1.for = 'tt'    
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.id = 'input1'
    input1.setAttribute('placeholder', 'Título');
    input1.oninput = function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
            }}

    // crie o segundo label e input
    var label2 = document.createElement('label');
    label2.innerHTML = "Descrição: ";
    label2.for = 'tt'    
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.id = 'input2'
    input2.setAttribute('placeholder', 'Descrição');
    input2.oninput = function() {
        if (this.value.length > 60) {
            this.value = this.value.slice(0, 60);
            }}

    // adicione os labels e inputs à div pai
    divInputs.appendChild(label1);
    divInputs.appendChild(input1);
    divInputs.appendChild(label2);
    divInputs.appendChild(input2);

    
    // aumentar a margem inferior do botão
    divInputs.style.marginBottom = "20px";
    divInputs.style.paddingBottom = "20px";


    // adicionar margem superior para os campos criados
    divInputs.style.marginTop = "20px";

    // esse é o botão de mais var
    let btn = document.createElement("button");
    btn.innerHTML = "Mais uma opção ➕";
    btn.style.marginBottom = "10px";
    btn.classList.add("btn", "btn-mais-variaveis");
    btn.onclick = maisCampos;
    divInputs.appendChild(btn) 
    // criando o botão gerar
    var btnG = document.createElement("button");
    btnG.innerHTML = "Gerar 👍";
    btnG.onclick = gerar;
    btnG.classList.add("gerar-btn");
    document.getElementById("dd").appendChild(btnG);
    //--------------
}

function maisCampos() {
    if (quantidade == 10){
        alert('quantidade máxima atingida')
    } else{
    quantidade++
    // Defina um contador para garantir que cada atributo tenha um nome exclusivo
    var contador = 1;

    // crie o primeiro label e input
    var label1 = document.createElement('label');
    label1.innerHTML = "Título:";
    label1.setAttribute('for', 'tt' + contador);
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'Título');
    input1.setAttribute('id', 'tt' + contador);
    input1.style.marginTop = '10px';
    input1.oninput = function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
            }}
    

    // crie o segundo label e input
    var label2 = document.createElement('label');
    label2.innerHTML = "Descrição: ";
    label2.setAttribute('for', 'desc' + contador);
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('placeholder', 'Descrição');
    input2.setAttribute('id', 'desc' + contador);
    input2.oninput = function() {
        if (this.value.length > 60) {
            this.value = this.value.slice(0, 60);
        }
    }
    
    
    // incremente o contador
    input1.classList.add('mais-campos-inputs');
    input2.classList.add('mais-campos-inputs');
    contador++;
  

    // adicione os labels e inputs à div pai
    divInputs.appendChild(label1);
    divInputs.appendChild(input1);
    divInputs.appendChild(label2);
    divInputs.appendChild(input2);

    // cria uma nova div para os campos criados
  var camposDiv = document.createElement('div');
  camposDiv.classList.add('campos-div');

  // adiciona os campos à nova div
  camposDiv.appendChild(label1);
  camposDiv.appendChild(input1);
  camposDiv.appendChild(label2);
  camposDiv.appendChild(input2);

  // cria o botão "Remover campo" e adiciona à nova div
  var removerBtn = document.createElement('button');
  removerBtn.innerHTML = 'Remover';
  removerBtn.classList.add('remover-campo-btn');
  removerBtn.onclick = function() {
    quantidade--
    camposDiv.remove(); // remove a div e todos os seus filhos (ou seja, os campos e o botão)
  };
  camposDiv.appendChild(removerBtn);

  // adiciona a nova div à div pai
  divInputs.appendChild(camposDiv);
  
  
}}

function gerar(){
       
    // descrição do body ✅
    
    //botão do menu    
    const botaoList = document.getElementById('botaoListID').value
    
    // titulo list
    const titleList = document.getElementById('descricaoListID').value
    
    //Primeira opção
    var p11 = document.getElementById('input1').value
    var p22 = document.getElementById('input2').value
    var primeiroCampo = {
        "id": "ID 1",
        "title": p11,
        "description": p22
    }
    
   //removendo campos e botões --------

    
//--- capturando os valores digitados
var campos = document.querySelectorAll('.campos-div'); // seleciona todos os campos criados dinamicamente
var resultado = [];
resultado.push(primeiroCampo)

for (var i = 0; i < campos.length; i++) {
  var id = 'ID ' + (i+2); // gera o ID do campo
  var titulo = campos[i].querySelector('input[type="text"][placeholder="Título"]').value; // captura o valor do campo de título
  var descricao = campos[i].querySelector('input[type="text"][placeholder="Descrição"]').value; // captura o valor do campo de descrição

  resultado.push({
    "id": id,
    "title": titulo,
    "description": descricao
  });
}




//------Jogando tudo pra dentro do JSON final
var final = {
	"recipient_type": "individual",
	"type": "interactive",
	"interactive": {
		"type": "list",	
		"body": {
			"text": menuInput.value
		},
		"action": {
			"button": botaoList,
			"sections": [
				{
					"title": titleList,
					"rows": resultado
				},
			]
		}
	}
}

// ------- agpagando tudo ------
while (divInputs.childNodes.length > 0) {
    divInputs.removeChild(divInputs.lastChild);
}
menuDescricao.innerHTML = "Agora <b>copie e cole</b> no seu conteúdo dinamico ✅";
var imagem = document.querySelector('img');
imagem.src = 'https://marcos-rodrigues-take-blip.github.io/Menu-lista/imagem%20final.png';

//------------ resultado no campo ----------
let inputResultado = document.createElement("textarea");
      inputResultado.id = "resultado"; 
      inputResultado.value = JSON.stringify(final, null, 2)
      inputResultado.setAttribute("readonly", "true");
      inputResultado.style.width = "500px";
      inputResultado.style.height = "200px";
      document.getElementById("dd").appendChild(inputResultado);

      //---------- botões de copiar e voltar -------

  let btnCopiar = document.createElement("button");
  btnCopiar.innerHTML = "Copiar ✂️";
  btnCopiar.classList.add("btn", "btn-copiar");
  btnCopiar.id = "btnCopiar";
  btnCopiar.onclick = copiarResultado;
  document.getElementById("dd").appendChild(btnCopiar);
  
  let btnRefazer = document.createElement("button");
  btnRefazer.innerHTML = "Refazer 🔙";
  btnRefazer.classList.add("btn", "btn-refazer");
  btnRefazer.id = "btnRefazer";
  btnRefazer.onclick = refazer;
  document.getElementById("dd").appendChild(btnRefazer);

}
function refazer(){
    window.location.href = 'index.html';

}
function copiarResultado(){
    var resultado = document.getElementById("resultado");
    let btnCopiar = document.getElementById("btnCopiar");
    resultado.select();
    btnCopiar.innerHTML = "Copiado ✅";
    btnCopiar.classList.add("btn-copiado");
    document.execCommand("copy");
}
