import pkg from "mongoose"
const {Schema, model} = pkg

const visitSchema = new mongoose.Schema({
    totalVisits: { type: Number, default: 0 },
    days: [{ type: String }] 
});

const Visit = mongoose.model("visits", visitSchema);
export default Visit
