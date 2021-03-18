import express, { Express, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLList,
} from 'graphql';

import Report from '../db/models/Report';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

import connection from './connection';

const ReportType = new GraphQLObjectType({
	name: 'Report',
	fields: () => ({
		id: { type: GraphQLString },
		stepName: { type: GraphQLString },
		stepTitle: { type: GraphQLString },
		description: { type: GraphQLString },
		addToReport: { type: GraphQLBoolean },
		date: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getAllReports: {
			type: GraphQLList(ReportType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return Report.find().lean();
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createReport: {
			type: ReportType,
			args: {
				stepName: { type: GraphQLString },
				stepTitle: { type: GraphQLString },
				description: { type: GraphQLString },
				addToReport: { type: GraphQLBoolean },
				date: { type: GraphQLString },
			},
			async resolve(parent, args) {
				await Report.create({
					stepName: args.stepName,
					stepTitle: args.stepTitle,
					description: args.description,
					addToReport: args.addToReport,
					date: args.date,
				});
				return args;
			},
		},
	},
});

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
	res.json({ message: 'Reporrs. Create your progress report' });
});

// GET reports
app.get('/reports', async (req: Request, res: Response) => {
	try {
		const reports = await Report.find({}).lean();
		res.status(200).json({ reports });
	} catch (error) {
		res.json({ error, errormessage: 'Error fetching all reports!' });
	}
});

// GET report by ID
app.get('/reports/:reportId', async (req: Request, res: Response) => {
	try {
		const reports = await Report.findById(req.params.reportId).lean();
		res.status(200).json({ reports });
	} catch (error) {
		res.json({ error, errormessage: 'Error fetching report by ID!' });
	}
});

// POST report
app.post('/reports', async (req: Request, res: Response) => {
	const { stepName, stepTitle, description, addToReport, date } = req.body;

	const reportData = {
		stepName,
		stepTitle,
		description,
		addToReport,
		date,
	};

	try {
		const reports = await new Report(reportData).save();
		res.status(200).json({ reports });
	} catch (error) {
		res.json({ error, errormessage: 'Error saving report!' });
	}
});

// DELETE report by ID
app.delete('/reports/:reportId', async (req: Request, res: Response) => {
	try {
		const response = await Report.findByIdAndDelete(req.params.reportId);

		res.status(200).json({ response });
	} catch (error) {
		res.json({ error, errormessage: 'Error deleting report!' });
	}
});

const apolloServer = new ApolloServer({ resolvers, typeDefs });

apolloServer.applyMiddleware({ app, path: '/graphql' });

connection(app);

mongoose.connection.on('error', error => {
	console.log('DB_CONN_ERROR:CONNECTION:::', error);
});

mongoose.connection.on('connected', () => {
	console.log('DB_CONN_SUCCESS:::');
});
