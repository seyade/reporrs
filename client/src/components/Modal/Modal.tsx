import React, {
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { useSpring, animated } from 'react-spring';

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

	const animation = useSpring({
		config: {
			duration: 300,
		},
		opacity: isShowing ? 1 : 0,
		transform: isShowing ? `translateY(0%)` : `translateY(-100%)`,
	});

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
					<animated.div style={animation}>
						<ModalParent>
							{showCloseButton && (
								<CloseModalButton
									arial-label="Close modal"
									onClick={handleCloseModal}
								/>
							)}
							<ModalBody>{children}</ModalBody>
						</ModalParent>
					</animated.div>
				</ModalWrapper>
			) : null}
		</>
	);
};

export default Modal;
