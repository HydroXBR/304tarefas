document.getElementById('btnVoltar').addEventListener('click', function() {
		window.location.href = '/'; // Redireciona para a página principal
});

const alunos = [
	{
		"complete": "Alexandra Evelyn",
		"id": "alexa"
	},
	{
		"complete": "Ana Jaques",
		"id": "annaj"
	},
	{
		"complete": "Amanda Ximenes",
		"id": "amanda"
	},
	{
		"complete": "Ana Massulo",
		"id": "massulo"
	},
	{
		"complete": "Beatriz Morais",
		"id": "bea"
	},
	{
		"complete": "Caleb Alves",
		"id": "caleb"
	},
	{
		"complete": "Carlos Diego",
		"id": "carlos"
	},
	{
		"complete": "Dandara Amorim",
		"id": "dandis"
	},
	{
		"complete": "Eduardo Rossoni",
		"id": "rssn"
	},
	{
		"complete": "Emanuel Kalebe",
		"id": "kalebe"
	},
	{
		"complete": "Evandro Feitosa",
		"id": "evan"
	},
	{
		"complete": "Henrique Neto",
		"id": "henri"
	},
	{
		"complete": "Igor Paiva",
		"id": "igor"
	},
	{
		"complete": "Isaías Nascimento",
		"id": "isaias"
	},
	{
		"complete": "João Gustavo",
		"id": "joao"
	},
	{
		"complete": "João V. Aguiar",
		"id": "aguiar"
	},
	{
		"complete": "José Bessa",
		"id": "bessa"
	},
	{
		"complete": "Jhennyfer Lima",
		"id": "jhen"
	},
	{
		"complete": "Jeremias Holanda",
		"id": "jeremias"
	},
	{
		"complete": "Kamille Ataide",
		"id": "kami"
	},
	{
		"complete": "Laila Auzier",
		"id": "laila"
	},
	{
		"complete": "Ludmylla Gabriela",
		"id": "ludm"
	},
	{
		"complete": "Luma Chaves",
		"id": "luma"
	},
	{
		"complete": "Lívia Nakajima",
		"id": "naka"
	},
	{
		"complete": "Lucas Daniel",
		"id": "lucas"
	},
	{
		"complete": "Luíz Antônio",
		"id": "tonhao"
	},
	{
		"complete": "Maria Clara",
		"id": "clara"
	},
	{
		"complete": "Maria Eduarda",
		"id": "maria"
	},
	{
		"complete": "Mário Henrique",
		"id": "mario"
	},
	{
		"complete": "Nathália Brito",
		"id": "nath"
	},
	{
		"complete": "Nicolly Franco",
		"id": "nicolly"
	},
	{
		"complete": "Pedro Henrique",
		"id": "pedro"
	},
	{
		"complete": "Raquel Benarrós",
		"id": "raquel"
	},
	{
		"complete": "Sara Cristina",
		"id": "sara"
	},
	{
		"complete": "Sophia Gentil",
		"id": "soph"
	},
	{
		"complete": "Vinícius Costa",
		"id": "vini"
	},
	{
		"complete": "Yasmin",
		"id": "yasmin"
	}
];

const disciplinas = [
	{ value: "art", label: "Artes" },
	{ value: "port", label: "Português" },
	{ value: "mat", label: "Matemática" },
	{ value: "ucemat", label: "UCE (Matemática)" },
	{ value: "fis", label: "Física" },
	{ value: "hist", label: "História" },
	{ value: "ucahist", label: "UCA - Povos Amazônicos" },
	{ value: "socio", label: "Sociologia" },
	{ value: "geo", label: "Geografia" },
	{ value: "idama", label: "IDAMA" },
	{ value: "edfis", label: "Educação Física" },
	{ value: "ing", label: "Inglês" },
	{ value: "fil", label: "Filosofia" },
	{ value: "bio", label: "Biologia" },
	{ value: "ucabio", label: "UCA (Biologia)" },
	{ value: "quim", label: "Química" },
	{ value: "projv", label: "Projeto de Vida" }
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


document.addEventListener('DOMContentLoaded', async function() {
	async function carregarTarefa(id) {
		try {
			const response = await fetch(`/search?id=${id}`); 
			const tarefa = await response.json();

			document.getElementById('titulo').textContent = tarefa.title;
			document.getElementById('descricao').innerHTML = tarefa.desc.replace(/(\bhttps?:\/\/\S+)/gi, '<a href="$1">$1</a>');
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

		const urlParams = new URLSearchParams(window.location.search);
		const tarefaId = urlParams.get('id');
		if (tarefaId) {
			carregarTarefa(tarefaId);
		}

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