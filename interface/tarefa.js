const urlParams = new URLSearchParams(window.location.search);
const tarefaId = urlParams.get('id');
const isAdmin = urlParams.get('admin')

document.getElementById('btnVoltar').addEventListener('click', function() {
	isAdmin == "true" ? window.location.href = '/?admin=true' : window.location.href = '/'
});

document.getElementById('menuIcon').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); 
});

const alunos = [
  {
    "complete": "Agnus Silveira",
    "id": "agnus"
  },
  {
    "complete": "Alana Larissa",
    "id": "alana"
  },
  {
    "complete": "Ana Luiza",
    "id": "amassulo"
  },
  {
    "complete": "Ana Victoria",
    "id": "avictoria"
  },
  {
    "complete": "Anna Jaques",
    "id": "annar"
  },
  {
    "complete": "Asaphy Santana",
    "id": "asaphy"
  },
  {
    "complete": "Benjamim Augusto",
    "id": "benjamim"
  },
  {
    "complete": "Caleb Alves",
    "id": "caleb"
  },
  {
    "complete": "Carla Mayane",
    "id": "carlam"
  },
  {
    "complete": "Carlos Augusto",
    "id": "carlosa"
  },
  {
    "complete": "Davi Azevedo",
    "id": "davi"
  },
  {
    "complete": "Elias Silva",
    "id": "elias"
  },
  {
    "complete": "Eliseu Lima",
    "id": "eliseu"
  },
  {
    "complete": "Eunice Valesca",
    "id": "eunice"
  },
  {
    "complete": "Fernanda Brito",
    "id": "fernanda"
  },
  {
    "complete": "Giselle Veiga",
    "id": "giselle"
  },
  {
    "complete": "Grazi Mirelly",
    "id": "grazi"
  },
  {
    "complete": "Ilanna Adrião",
    "id": "ilanna"
  },
  {
    "complete": "Iennyfer Laís",
    "id": "iennyfer"
  },
  {
    "complete": "Joana Victoria",
    "id": "joana"
  },
  {
    "complete": "João Victor",
    "id": "joaov"
  },
  {
    "complete": "Kamille Sousa",
    "id": "kamille"
  },
  {
    "complete": "Karen Santos",
    "id": "karen"
  },
  {
    "complete": "Larissa Souza",
    "id": "larissa"
  },
  {
    "complete": "Luana Dias",
    "id": "luana"
  },
  {
    "complete": "Luiz Miguel",
    "id": "luiz"
  },
  {
    "complete": "Maria Eduarda Viegas",
    "id": "mariav"
  },
  {
    "complete": "Maria Lívia",
    "id": "marial"
  },
  {
    "complete": "Maria Luísa",
    "id": "marialu"
  },
  {
    "complete": "Maria Pietra",
    "id": "mariap"
  },
  {
    "complete": "Mateus Guilherme",
    "id": "mateus"
  },
  {
    "complete": "Nathália Brito",
    "id": "nathalia"
  },
  {
    "complete": "Paulo André",
    "id": "paulo"
  },
  {
    "complete": "Paulo Iunio",
    "id": "paulom"
  },
  {
    "complete": "Pedro Lucas",
    "id": "pedrob"
  },
  {
    "complete": "Pedro Lucas",
    "id": "pedros"
  },
  {
    "complete": "Raquel Benarrós",
    "id": "raquel"
  },
  {
    "complete": "Ruydson Thiago",
    "id": "ruydson"
  },
  {
    "complete": "Sara Lemos",
    "id": "sara"
  },
  {
    "complete": "Yuri Silveira",
    "id": "yuri"
  },
  {
    "complete": "Isaías Nascimento",
    "id": "isaias"
  }
];

const disciplinas = [
	{ value: "art", label: "Artes" },
	{ value: "port", label: "Português" },
	{ value: "mat", label: "Matemática" },
	{ value: "fis", label: "Física" },
	{ value: "hist", label: "História" },
	{ value: "socio", label: "Sociologia" },
	{ value: "geo", label: "Geografia" },
	{ value: "edfis", label: "Educação Física" },
	{ value: "ing", label: "Inglês" },
	{ value: "fil", label: "Filosofia" },
	{ value: "bio", label: "Biologia" },
	{ value: "quim", label: "Química" }
];

function getLabelByValue(value) {
	const a = alunos.find(al => al.id == value);
	return a ? a.complete : null;
}

function materia(value) {
	const disciplina = disciplinas.find(disciplina => disciplina.value === value);
	return disciplina ? disciplina.label : null;
}

let vopt2 = document.createElement("option")
vopt2.value = ""
vopt2.innerHTML = "Selecione..."

document.getElementById("selecionar-nome").appendChild(vopt2)

for(var i = 0; i < alunos.length; i++){
	let opt = document.createElement("option")
	opt.value = alunos[i].id
	opt.innerHTML = alunos[i].complete
	document.getElementById("selecionar-nome").appendChild(opt)
}

function formatarData(dataString) {
		const data = new Date(dataString);
		const dia = data.getDate();
		const mes = data.getMonth() + 1;
		const ano = data.getFullYear();
		const horas = data.getHours();
		const minutos = data.getMinutes();

		// Adiciona um zero à esquerda se for menor que 10
		const diaFormatado = dia < 10 ? `0${dia}` : dia;
		const mesFormatado = mes < 10 ? `0${mes}` : mes;
		const horasFormatadas = horas < 10 ? `0${horas}` : horas;
		const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

		return `${diaFormatado}/${mesFormatado}/${ano} às ${horasFormatadas}:${minutosFormatados}`;
}

async function fetchadd(id, days){
	await fetch(`/moredays?id=${id}&days=${days}`).then(async response => {
		const rr = await response.json()
		if(rr.success == false){
			alert("Erro ao adicionar os dias! Contate o Isaías, por favor.")
			console.log("Reason add dias", rr.reason)
		}else{
			alert("Alterado com sucesso!")
			window.location.href = `/tarefa?id=${id}&admin=true`
		}
	})
}

async function fetchdel(id){
	await fetch(`/apagar?id=${id}&token=22222`).then(async response => {
		const rr = await response.json()
		if(rr.success == false){
			alert("Erro ao deletar tarefa! Contate o Isaías, por favor.")
			console.log("Reason add dias", rr.reason)
		}else{
			alert("Deletada com sucesso!")
			window.location.href = `/?admin=true`
		}
	})
}

async function createAdminButtons(){
	const ndiv = document.createElement("div")
	ndiv.id = "setdate"

	const ninput = document.createElement("input")
	ninput.type = "number"
	
	const nbtn = document.createElement("button")
	ninput.placeholder = "Dias a adicionar"
	nbtn.innerText = "Adicionar"

	nbtn.addEventListener('click', async function() {
		if(!ninput.value) return alert("Você não inseriu os dias.")

		fetchadd(tarefaId, ninput.value)
	})

	ndiv.appendChild(ninput)
	ndiv.appendChild(nbtn)

	document.getElementById("entregabox").appendChild(ndiv)

	document.getElementById('deletediv').style.display = 'block'
	let delbtn = document.getElementById("delete")
	delbtn.addEventListener('click', async function() {
		fetchdel(tarefaId)
	})
}


document.addEventListener('DOMContentLoaded', async function() {
	async function carregarTarefa(id) {
		try {
			const response = await fetch(`/search?id=${id}`); 
			const tarefa = await response.json();

			document.getElementById('titulo').textContent = tarefa.title;
			document.getElementById('descricao').innerHTML = tarefa.desc.replace(/\/\/\//gmi, "<br></br>").replace(/(\bhttps?:\/\/\S+)/gi, '<a href="$1">$1</a>');
			document.getElementById('disciplina').textContent = materia(tarefa.disc);
			document.getElementById('pedida-em').textContent = new Date(tarefa.pedida).toLocaleDateString();
			document.getElementById('entrega').textContent = new Date(tarefa.entrega).toLocaleDateString();
			document.getElementById('autor').textContent = getLabelByValue(tarefa.author) + " | " + formatarData(tarefa.registered) 
			document.getElementById('nivel').textContent = tarefa.nivel

			const comentariosDiv = document.getElementById('comentarios');
			comentariosDiv.innerHTML = '';

			if (tarefa.comments.length === 0) {
				const semComentariosMsg = document.createElement('div');
				semComentariosMsg.textContent = 'Nenhum comentário disponível.';
				comentariosDiv.appendChild(semComentariosMsg);
			} else {
				tarefa.comments.forEach(comment => {
					const comentarioElemento = document.createElement('div');
					
					const nomeElemento = document.createElement('span');
					nomeElemento.style.fontWeight = 'bold'; 
					nomeElemento.textContent = getLabelByValue(comment.author); 
					comentarioElemento.appendChild(nomeElemento);
					
					const dataElemento = document.createElement('span');
					dataElemento.classList.add("data-comentario")
					dataElemento.textContent = " " + formatarData(comment.date)
					comentarioElemento.appendChild(dataElemento);
					comentarioElemento.appendChild(document.createTextNode(' | ')); 
					
				
					comentarioElemento.appendChild(document.createTextNode(comment.comment)); 
					comentariosDiv.appendChild(comentarioElemento);
					});
			}
		} catch (err) {
			console.error('Erro ao carregar informações da tarefa:', err);
		}
	}

	
		if (tarefaId) {
			carregarTarefa(tarefaId);
		}

		if(isAdmin == "true") createAdminButtons()

		const enviarComentarioBtn = document.getElementById('enviar-comentario');
		enviarComentarioBtn.addEventListener('click', async function() {
			const novoComentario = document.getElementById('novo-comentario').value;
			if(novoComentario.trim() !== '') {
				try {
					const urlParams = new URLSearchParams(window.location.search);
					const tarefaId = urlParams.get('id');
					const authorSelector = document.getElementById('selecionar-nome');
					const author = authorSelector.value;
					if (!author) {
						alert('Por favor, selecione um nome antes de enviar o comentário.');
						return;
					}
					const date = new Date().toISOString(); 
					const response = await fetch(`/comment?author=${author}&comment=${novoComentario}&date=${date}&idtar=${tarefaId}`, {
						method: 'GET'
					});
					const data = await response.json();
					if (data.success) {
						carregarTarefa(tarefaId);
						document.getElementById('novo-comentario').value = '';
					} else {
						console.error('Erro ao adicionar comentário:', data.reason);
					}
				} catch (err) {
					console.error('Erro ao adicionar comentário:', err);
				}
			}
	})
});
