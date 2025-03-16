document.getElementById('menuIcon').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); 
});

function randomid() {
	return Math.random().toString(36).slice(-10);
}

let vopt = document.createElement("option")
vopt.value = ""
vopt.innerHTML = "Selecione..."
let vopt2 = document.createElement("option")
vopt2.value = ""
vopt2.innerHTML = "Selecione..."

document.getElementById("author").appendChild(vopt)
document.getElementById("disciplina").appendChild(vopt2)

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

for(var i = 0; i < disciplinas.length; i++){
	let opt = document.createElement("option")
	opt.value = disciplinas[i].value	
	opt.innerHTML = disciplinas[i].label
	document.getElementById("disciplina").appendChild(opt)
}

for(var i = 0; i < alunos.length; i++){
	let opt = document.createElement("option")
	opt.value = alunos[i].id
	opt.innerHTML = alunos[i].complete
	document.getElementById("author").appendChild(opt)
}

document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded")
	const form = document.getElementById('addTaskForm');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		
		const tipo = document.getElementById('tipo').value
		const titulo = document.getElementById('titulo').value
		const disciplina = document.getElementById('disciplina').value
		const pedidaa = Date.parse(document.getElementById('pedida-em').value)
		const pedidaEm = new Date(pedidaa).setHours(new Date(pedidaa).getHours() + 24);
		const entregaa = Date.parse(document.getElementById('entrega').value)
		const entrega = new Date(entregaa).setHours(new Date(entregaa).getHours() + 24)
		const author = document.getElementById('author').value
		const desc = document.getElementById('desc').value
		console.log("DESC:", desc)
		const nivel = document.getElementById('nivel').value

		if(entrega < pedidaEm){
			alert("A data de entrega não pode ser anterior à data de pedida.")
			return;
		}

		add(author, tipo, titulo, desc, disciplina, pedidaEm, entrega, nivel).then(e=>console.log("added"))

		async function addd(author, tipo, titulo, desc, disc, pedida, entrega, nivel){
			const response = await fetch(`/addtar?author=${author}&tipo=${tipo}&titulo=${titulo}&desc=${desc}&disciplina=${disc}&pedida=${pedida}&entrega=${entrega}&nivel=${nivel}`)
			console.log("addded")
			const rr = await response
			if(!rr) return false
			return rr
		}
		
		async function add(author, tipo, titulo, desc, disc, pedida, entrega, nivel){
			addd(author, tipo, titulo, desc, disc, pedida, entrega, nivel).then(async response => {
				const rr = await response.json()
				console.log(rr)

				if(rr.success == false){
					alert("Erro ao adicionar! Contate o Isaías, por favor.")
					console.log("Reason", rr.reason)
				}else{
					alert("Enviado com sucesso!")
					window.location.href = "/index.html"
				}
			})
		}
	})
})
