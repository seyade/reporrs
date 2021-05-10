import React from 'react';

import Modal from '../../components/Modal';

import {
	DialogWrapper,
	DialogActions,
	ConfirmButton,
	CancelButton,
} from './ConfirmDialogStyled';

export interface ConfirmDialogProps {
	onClick?: () => void;
	onConfirm: () => void;
	confirmText?: React.ReactNode | string;
	confirmTitle?: React.ReactNode | string;
	children?: React.ReactNode;
	isShowing: any;
	setIsShowing: any;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	onConfirm,
	confirmText,
	confirmTitle,
	isShowing,
	setIsShowing,
}) => {
	const handleClose = () => {
		setIsShowing(false);
	};

	const handleConfirm = () => {
		onConfirm();
		setIsShowing(false);
	};

	return (
		<>
			<Modal
				isShowing={isShowing}
				setIsShowing={setIsShowing}
				showCloseButton={false}
			>
				<DialogWrapper>
					<h3>{confirmTitle}</h3>
					<p>{confirmText}</p>

					<DialogActions>
						<CancelButton onClick={handleClose}>Cancel</CancelButton>
						<ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
					</DialogActions>
				</DialogWrapper>
			</Modal>
		</>
	);
};

export default ConfirmDialog;
