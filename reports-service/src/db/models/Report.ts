import { Schema, Document, model } from 'mongoose';

export interface ReportType extends Document {
	_id: string;
	stepName: string;
	stepTitle: string;
	description: string;
	addToReport: boolean;
	date: string;
}

export const ReportSchema: Schema = new Schema(
	{
		stepName: String,
		stepTitle: String,
		description: String,
		addToReport: Boolean,
		date: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	}
);

export default model<ReportType>('Report', ReportSchema);
