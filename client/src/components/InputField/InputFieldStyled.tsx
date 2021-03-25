import styled from 'styled-components';

export const Field = styled.span.attrs(props => ({
	className: props.className,
}))`
	display: inline-block;
	display: inline-flex;
`;

export const FieldLabel = styled.label.attrs(props => ({
	htmlFor: props.htmlFor,
	className: props.className,
}))`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const FieldInput = styled.input`
	display: inline-block;
	width: 100%;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	border: 0;
	background-color: #e5e5e5;
	border-radius: 4px;
	padding: 12px 16px;

	&[type='checkbox'] {
		width: auto;
		margin-right: 8px;
	}
`;
