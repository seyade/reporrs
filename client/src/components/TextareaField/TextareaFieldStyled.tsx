import styled from 'styled-components';

export const Field = styled.span.attrs(props => ({
	className: props.className,
}))`
	display: inline-block;
	width: 100%;
	margin-bottom: 16px;
`;

export const FieldLabel = styled.label.attrs(props => ({
	htmlFor: props.htmlFor,
	className: props.className,
}))`
	display: flex;
	align-items: center;

	input {
		margin-right: 8px;
	}
`;

export const FieldTextarea = styled.textarea`
	width: 100%;
	padding: 12px 16px;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	border: 1px solid #b5b5b5;
	border-radius: 4px;

	&::placeholder {
		color: #d5d5d5;
	}
`;
