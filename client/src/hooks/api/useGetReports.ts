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
	const { data } = useQuery<ReportList>(GET_REPORTS);

	if (typeof data !== 'undefined' && Array.isArray(data.reports)) {
		const reportList = [...data.reports];
		return reportList.reverse();
	}
};
