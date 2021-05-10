import { useQuery } from '@apollo/react-hooks';
import { GET_REPORTS } from '../api/Mutations';

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

export const useGetReports = () => {
	const { data, loading } = useQuery<ReportList>(GET_REPORTS);

	if (typeof data !== 'undefined' && Array.isArray(data.reports)) {
		const reportList = [...data.reports];
		return reportList.reverse();
	}
};
