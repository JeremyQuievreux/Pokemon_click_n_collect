import mongoose from 'mongoose';

// Document interface
interface IUser {
  pseudo: string;
  mail: string;
  password: string;
  pokeCoin: number;
  cards: {}[];
}

// Schema
const UserSchema = new mongoose.Schema<IUser>({
  pseudo: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  pokeCoin: { type: Number, default: 1000 },
  cards: { type: [{}], default: []},
});

// 3. Create a Model.
const UserModel = mongoose.models.user || mongoose.model<IUser>('user', UserSchema);

export default UserModel;