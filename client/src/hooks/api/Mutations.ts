import { gql } from '@apollo/client';

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
			id
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
			id
		}
	}
`;
