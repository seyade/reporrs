import React from 'react';
import { useSpring, animated } from 'react-spring';

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
	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: isShowing ? 1 : 0,
		transform: isShowing ? `translateY(0%)` : `translateY(-100%)`,
	});

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
				<animated.div style={animation}>
					<DialogWrapper>
						<h3>{confirmTitle}</h3>
						<p>{confirmText}</p>

						<DialogActions>
							<CancelButton onClick={handleClose}>Cancel</CancelButton>
							<ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
						</DialogActions>
					</DialogWrapper>
				</animated.div>
			</Modal>
		</>
	);
};

export default ConfirmDialog;
