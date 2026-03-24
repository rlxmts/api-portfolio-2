import mongoose, { Schema } from "mongoose";

const projetoSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  imagem: { 
    type: String, 
    required: [true, "Caminho da imagem é obrigatório"] 
  },
  titulo: { 
    type: String, 
    required: [true, "Titulo do projeto é obrigatório"] 
  },
  repositorio: { 
    type: String, 
    reqired: [true, "O caminho do repositório é obrigatório"] 
  },
  deploy: { type: String },
  tags: { type: Array },
  data: {
    type: Date,
    default: Date.now
  },
  texto: {
    type: String, 
    required: [true, "Texto descrevendo o projeto é obrigatório"]
  }
}, { versionKey: false });

const projeto = mongoose.model("projetos", projetoSchema);

export default projeto;