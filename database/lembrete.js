import pkg from "mongoose"
const {Schema, model} = pkg


const schema = Schema({
	title: { type: String, required: true },
	desc: { type: String, required: true },
	date: { type: String, required: true },
	registered: { type: Number, default: new Date().getTime() },
})

const lembrete = model('205lembretes', schema)
export default lembrete