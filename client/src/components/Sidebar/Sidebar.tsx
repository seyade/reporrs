import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
	flex: 0 0 25%;
	padding: 32px;
	background-color: #e5e5e5;
`;

function Sidebar() {
	return (
		<SidebarWrapper>
			<h1>Sidebar</h1>
		</SidebarWrapper>
	);
}

export default Sidebar;
