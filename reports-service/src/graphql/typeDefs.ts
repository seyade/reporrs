import { gql } from 'apollo-server';

const typeDefs = gql`
	type Report {
		id: ID!
		_id: ID!
		stepName: String!
		stepTitle: String!
		description: String
		addToReport: Boolean!
		date: String!
		createdAt: String!
	}

	type ReportResponse {
		success: Boolean!
		message: String
		reports: [Report]
	}

	type Query {
		reports: [Report]!
	}

	type Mutation {
		createReport(
			stepName: String!
			stepTitle: String!
			description: String
			addToReport: Boolean!
			date: String!
		): Report

		updateReport(
			_id: ID!
			stepName: String
			stepTitle: String
			description: String
			addToReport: Boolean
			date: String
		): Report

		deleteReport(_id: ID!): Report
	}
`;

export default typeDefs;
