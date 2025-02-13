

document.addEventListener('DOMContentLoaded', function() {
	console.log("loaded")
	const form = document.getElementById('addTaskForm');
	document.getElementById('menuIcon').addEventListener('click', function () {
    		const navLinks = document.getElementById('navLinks');
		    navLinks.classList.toggle('active'); 
	});

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const title = document.getElementById('title').value
		const desc = document.getElementById('desc').value
		const date = document.getElementById('date').value

		add(title, desc, date).then(e=>console.log("added"))

		async function addd(title, desc, date){
			const response = await fetch(`/addlemb?title=${title}&desc=${desc}&date=${date}`)
			console.log("addded")
			const rr = await response
			if(!rr) return false
			return rr
		}

		async function add(title, desc, date){
			addd(title, desc, date).then(async response => {
				const rr = await response.json()
				console.log(rr)

				if(rr.success == false){
					alert("Erro ao adicionar! Contate o Isaías, por favor.")
					console.log("Reason lembrete", rr.reason)
				}else{
					alert("Enviado com sucesso!")
					window.location.href = "/addlembrete"
				}
			})
		}
	})
})
