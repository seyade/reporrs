import React, { useState, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalParent, ModalBody } from './ModalStyled';

export interface ModalProps {
	visible?: boolean;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
	return visible ? (
		<>
			<ModalParent>
				<ModalBody>{children}</ModalBody>
			</ModalParent>
		</>
	) : null;
};

export default Modal;
