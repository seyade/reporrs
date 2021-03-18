import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';

export interface ModalProps {
	visible?: boolean;
	children: ReactNode;
}

const ModalParent = styled.div<ModalProps>`
	position: fixed;
	top: 0%;
	left: 0%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBody = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Modal = ({ children, visible }: ModalProps) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (visible) {
			setIsVisible(visible);
		} else {
			setIsVisible(false);
		}
	}, [visible]);

	return isVisible ? (
		<ModalParent visible={visible}>
			<ModalBody>{children}</ModalBody>
		</ModalParent>
	) : null;
};

export default Modal;
