import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from '../../components/Modal';

export interface ConfirmDialogProps {
	onClick?: () => void;
	onConfirm: () => void;
	confirmText?: string | React.ReactNode;
	confirmTitle?: string | React.ReactNode;
	visible: boolean;
	children?: React.ReactNode;
}

export const DialogWrapper = styled.div`
	position: relative;
	width: 360px;
	padding: 24px;
	margin-bottom: 24px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

	h3 {
		margin: 0;
	}
`;

export const DialogActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CancelButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 80px;
	padding: 12px 16px;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #333;
	background-color: #e5e5e5;
	border: 0;
	border-radius: 4px;
	cursor: pointer;
`;

export const ConfirmButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 80px;
	padding: 12px 16px;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #333;
	background-color: rgba(255, 192, 0, 1);
	border: 0;
	border-radius: 4px;
	cursor: pointer;

	span {
		margin-right: 8px;
		font-size: 20px;
	}
`;

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	onConfirm,
	confirmText,
	confirmTitle,
	visible,
}) => {
	const [, setIsVisible] = useState(false);

	const handleClose = () => {
		setIsVisible(false);
	};

	const handleConfirm = () => {
		onConfirm();
		setIsVisible(false);
	};

	useEffect(() => {
		setIsVisible(visible);
	}, [visible]);

	return (
		<Modal>
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
