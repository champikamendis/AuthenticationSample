import { Document } from 'mongoose';

export interface User extends Document {
  email: String;
  password: String;
}
