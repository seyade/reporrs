import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type ReportList = {
	reports: {
		stepName: string;
		stepTitle: string;
		description: string;
		addToReport: boolean;
		date: string;
		createdAt: string;
	};
};

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

export const useGetReports = () => {
	const { data, loading } = useQuery<ReportList>(GET_REPORTS);

	console.log('LOADING:::', loading);

	if (typeof data !== 'undefined' && Array.isArray(data.reports)) {
		const reportList = [...data.reports];
		return reportList.reverse();
	}
};
