import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
    padding: 20px 0;
    font-size: 45px;
`;

export default class Title extends React.Component {
    render() {
        return (
            <StyledHeading>Pam's Shopping</StyledHeading>
        )
    }
}