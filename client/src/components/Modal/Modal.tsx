import React, {
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
} from 'react';

import {
	CloseModalButton,
	ModalBody,
	ModalParent,
	ModalWrapper,
} from './ModalStyled';

export interface ModalProps {
	children: ReactNode;
	showCloseButton?: boolean;
	isShowing?: boolean;
	setIsShowing?: (show: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
	children,
	showCloseButton,
	isShowing,
	setIsShowing,
}) => {
	const modalRef = useRef();

	const closeModal = (event: MouseEvent<HTMLDivElement>) => {
		if (modalRef.current === event.currentTarget && setIsShowing) {
			setIsShowing(false);
		}
	};

	const keyPress = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape' && isShowing) {
				setIsShowing && setIsShowing(false);
			}
		},
		[isShowing, setIsShowing]
	);

	const handleCloseModal = useCallback(() => {
		setIsShowing && setIsShowing(false);
	}, [setIsShowing]);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		<>
			{isShowing ? (
				<ModalWrapper onClick={closeModal} ref={modalRef}>
					<ModalParent>
						{showCloseButton && (
							<CloseModalButton
								arial-label="Close modal"
								onClick={handleCloseModal}
							/>
						)}
						<ModalBody>{children}</ModalBody>
					</ModalParent>
				</ModalWrapper>
			) : null}
		</>
	);
};

export default Modal;
