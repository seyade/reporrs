import styled from 'styled-components';

import { ModalProps } from './Modal';

export const ModalParent = styled.div<ModalProps>`
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

export const ModalBody = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
