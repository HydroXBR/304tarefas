import pkg from "mongoose"
const {Schema, model} = pkg

const visitSchema = new mongoose.Schema({
    totalVisits: { type: Number, default: 0 },
    days: [{ type: String }] 
});

export const Visit = mongoose.model("visits", visitSchema);
