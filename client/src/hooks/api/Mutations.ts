import { gql } from '@apollo/client';

export const GET_REPORTS = gql`
	{
		reports {
			_id
			stepName
			stepTitle
			description
			addToReport
			date
			createdAt
		}
	}
`;

export const CREATE_REPORT_MUTATION = gql`
	mutation createReport(
		$stepName: String!
		$stepTitle: String!
		$description: String!
		$addToReport: Boolean!
		$date: String!
	) {
		createReport(
			stepName: $stepName
			stepTitle: $stepTitle
			description: $description
			addToReport: $addToReport
			date: $date
		) {
			stepName
			stepTitle
			_id
		}
	}
`;

export const UPDATE_REPORT_MUTATION = gql`
	mutation updateReport(
		$stepName: String!
		$stepTitle: String!
		$description: String!
		$addToReport: Boolean
		$date: String!
	) {
		upadateReport(
			stepName: $stepName
			stepTitle: $stepTitle
			description: $description
			addToReport: $addToReport
			date: $date
		) {
			stepName
			stepTitle
			_id
		}
	}
`;

export const DELETE_REPORT_MUTATION = gql`
	mutation deleteReport($_id: ID!) {
		deleteReport(_id: $_id) {
			stepName
			stepTitle
			_id
		}
	}
`;
