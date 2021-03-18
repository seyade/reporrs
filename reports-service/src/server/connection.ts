import mongoose, { Mongoose } from 'mongoose';
import { Express } from 'express';

const PORT: string | number = process.env.PORT || 7004;
const DB_NAME: string = 'reports';
const DB_URI: string = `mongodb://localhost:27017/${DB_NAME}`;
// use for docker
// const DB_URI: string = `mongodb://root:password@mongodb-service:27017/${DB_NAME}?authSource=admin`;

const connection = async (app: Express): Promise<void> => {
	try {
		await mongoose.connect(DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		await app.listen(PORT, () => {
			console.log(`Reporrs app running on port ${PORT}.`);
		});
	} catch (error) {
		throw new Error('DB_CONN_ERROR:::' + error);
	}
};

export default connection;
