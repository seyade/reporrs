import React, { useState, useEffect } from 'react';

import Modal from '../../components/Modal';
import useDialog from '../../hooks/useDialog';

import {
	DialogWrapper,
	DialogActions,
	ConfirmButton,
	CancelButton,
} from './ConfirmDialogStyled';

export interface ConfirmDialogProps {
	onClick?: () => void;
	onConfirm: () => void;
	confirmText?: string;
	confirmTitle?: string;
	visible: boolean;
	children?: React.ReactNode;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	onConfirm,
	confirmText,
	confirmTitle,
	visible,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const { closeDialog, isShowing } = useDialog();

	const handleClose = () => {
		closeDialog();
	};

	const handleConfirm = () => {
		onConfirm();
		setIsVisible(false);
	};

	useEffect(() => {
		setIsVisible(visible);
	}, [visible, isVisible]);

	return (
		<Modal visible={isShowing}>
			<DialogWrapper>
				<h3>{confirmTitle}</h3>
				<p>{confirmText}</p>

				<DialogActions>
					<CancelButton onClick={handleClose}>Cancel</CancelButton>
					<ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
				</DialogActions>
			</DialogWrapper>
		</Modal>
	);
};

export default ConfirmDialog;
