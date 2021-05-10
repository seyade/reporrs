import { useState, useEffect } from 'react';

type useDialogType = {
	isShowing: boolean;
	showDialog: (show: boolean) => void;
	closeDialog: (show: boolean) => void;
};

const useDialog = (): useDialogType => {
	const [isShowing, setIsShowing] = useState(false);

	const showDialog = (show: boolean) => {
		setIsShowing(show);
	};

	const closeDialog = (show: boolean) => {
		console.log('DIALOG_STATE:SHOWING:BBB:', isShowing);
		setIsShowing(show);
	};

	useEffect(() => {
		console.log('DIALOG_STATE:SHOWING::', isShowing);
	}, [isShowing]);

	return { isShowing, showDialog, closeDialog };
};

export default useDialog;
