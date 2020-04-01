import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
    font-size: 45px;
`

export default class Title extends React.Component {
    render() {
        return (
            <StyledHeading>Shopping</StyledHeading>
        )
    }
}