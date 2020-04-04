import React from 'react';
import styled from 'styled-components';

const StyledSaveButton = styled.div`
    display: inline-block;
    margin: 10px;
    border-radius: 5px;
    background: green;
    padding: 15px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    transition: 200ms background;

    &:hover {
        background: darkgreen;
    }

    &:active {
        background: black;
    }
`;

export default class SaveButton extends React.Component {
    render() {
        return (
            <div>
                <StyledSaveButton onClick={this.props.onSave}>Save</StyledSaveButton>
            </div>
        )
    }
}