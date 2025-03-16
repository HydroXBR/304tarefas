import pkg from "mongoose"
const {Schema, model} = pkg

const comentarioSchema = Schema({
	author: String, 
	comment: String, 
	date: Date 
});

const schema = Schema({
	title: { type: String, required: true },
	tipo: { type: String, required: true },
	desc: { type: String, required: true },
	disc: { type: String, required: true },
	nivel: { type: String, required: true },
	pedida: { type: Number, required: true },
	entrega: { type: Number, required: true },
	author: { type: String, required: true },
	comments: [comentarioSchema],
	registered: { type: Number, default: new Date().getTime() }
})

const tarefa = model('304tarefas', schema)
export default tarefa
