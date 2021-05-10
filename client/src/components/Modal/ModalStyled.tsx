import { MouseEvent, Ref } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export interface ModalWrapperProps {
	onClick: (event: MouseEvent<HTMLDivElement>) => void;
	ref: any;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
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

export const ModalParent = styled.div``;

export const ModalBody = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const CloseModalButton = styled(MdClose)``;
