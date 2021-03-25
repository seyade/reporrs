import { useState, useEffect } from 'react';

type useDialogType = {
	isShowing: boolean;
	showDialog: () => void;
	closeDialog: () => void;
};

const useDialog = (): useDialogType => {
	const [isShowing, setIsShowing] = useState(false);

	const showDialog = () => {
		setIsShowing(true);
	};

	const closeDialog = () => {
		console.log('DIALOG_STATE:SHOWING:BBB:', isShowing);
		setIsShowing(false);
	};

	useEffect(() => {
		console.log('DIALOG_STATE:SHOWING::', isShowing);
	}, [isShowing]);

	return { isShowing, showDialog, closeDialog };
};

export default useDialog;
