import pkg from "mongoose"
const {Schema, model} = pkg

const visitSchema = Schema({
    totalVisits: { type: Number, default: 0 },
    days: [{ type: String }] 
});

const visit = model("304visits", visitSchema);
export default visit
