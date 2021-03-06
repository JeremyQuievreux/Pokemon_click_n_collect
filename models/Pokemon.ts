import mongoose from 'mongoose';
//Create Type
import { PokemonType } from '../types/PokemonType';
// Create Schema
const PokemonSchema = new mongoose.Schema<PokemonType>({
    gen: {type: Number, required: true},
    dex_number: {type: Number, required: true},
    name: {type: String, required: true},
    type: {type: [String], required: true},
    description: {type: String, required: false, default: ""},
    picURL: {type: String, required: true},
    price: {type: Number, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    rarity: {type: String, required: true},
});
// 3. Create a Model.
const PokemonModel = mongoose.models.pokemon || mongoose.model<PokemonType>("pokemon", PokemonSchema);
export default PokemonModel;