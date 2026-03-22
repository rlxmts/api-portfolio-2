import mongoose, { Schema } from "mongoose";

const projetoSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    imagem: { type: String, required: true },
    titulo: { type: String, required: true },
    repositorio: { type: String, reqired: true },
    deploy: { type: String },
    tags: { type: Array },
    data: {
    type: Date,
    default: Date.now
    },
    texto: {type: String, required: true}
}, { versionKey: false });

const projeto = mongoose.model("projetos", projetoSchema);

export default projeto;