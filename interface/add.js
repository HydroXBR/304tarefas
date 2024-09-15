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
		"complete": "Alexandra Evelyn",
		"id": "alexa"
	},
	{
		"complete": "Anna Jaques",
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
		"complete": "José A. Bessa",
		"id": "bessa"
	},
	{
		"complete": "José Henrique",
		"id": "jhenri"
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
		"complete": "Kauanne Bruce",
		"id": "kau"
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
		"complete": "Luís Antônio",
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
	{ value: "projv", label: "Projeto de Vida" },
	{ value: "pinte", label: "Projeto Integrador" }
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
