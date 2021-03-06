import Report from '../db/models/Report';

const resolvers = {
	Query: {
		async reports() {
			return await Report.find().lean();
		},
	},
	Mutation: {
		async createReport(parent: any, args: any, context: any, info: any) {
			const reportData = {
				stepName: args.stepName,
				stepTitle: args.stepTitle,
				description: args.description,
				addToReport: args.addToReport,
			};

			return await new Report(reportData).save();
		},

		async updateReport(parent: any, args: any, context: any, info: any) {
			if (!args._id) return;

			return await Report.findOneAndUpdate(
				{ _id: args._id },
				{
					$set: { ...args },
				},
				{ new: true },
				(error, report) => {
					if (error) console.log('GQL_REPORT_ERR:UPDATE::', error);
					console.log('GQL_REPORT:::', report);
					return report;
				}
			);
		},

		async deleteReport(parent: any, args: any, context: any, info: any) {
			return await Report.findByIdAndDelete(args._id);
		},
	},
};

export default resolvers;
