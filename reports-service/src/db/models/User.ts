import { Schema, Document, model } from 'mongoose';

export interface UserType extends Document {
	stepName: string;
	stepTitle: string;
	description: string;
	addToReport: boolean;
	date: string;
}

export const UserSchema: Schema = new Schema(
	{
		name: String,
		email: String,
	},
	{
		timestamps: true,
	}
);

export default model<UserType>('User', UserSchema, 'Users');
