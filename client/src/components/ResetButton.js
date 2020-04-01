import React from 'react';
import styled from 'styled-components';

const StyledSaveButton = styled.div`
    display: inline-block;
    margin: 10px;
    border-radius: 5px;
    background: red;
    padding: 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 200ms background;

    &:hover {
        background: darkred;
    }

    &:active {
        background: black;
    }
`;

export default class ResetButton extends React.Component {
    render() {
        return (
            <StyledSaveButton onClick={this.props.onReset}>Reset</StyledSaveButton>
        )
    }
}