import React from 'react';
import {Store} from '../redux/Store';
import Actions from '../redux/Actions';
import styled from 'styled-components';

const StyledRow = styled.tr`
    background: ${props => props.dark ? "#eee" : "#fff"}
`;

const StyledTD = styled.td`
    padding: 10px 20px;
`;

const StyledTDCenter = styled(StyledTD)`
    text-align: center;
`;

const StyledQuantityInput = styled.input`
    font-size: 20px;
    width: 150px;
`;

const StyledTextInput = styled.textarea`
    width: calc(100% - 6px);
    height: 80px;
    font-size: 20px;
`;

export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.updateItem = this.updateItem.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
    }

    updateItem(changedItem) {
        Store.dispatch(Actions.setItem(this.props.index, changedItem));
    }

    onChangeQuantity(event) {
        const item = this.props.item;
        item.quantity = event.target.value;
        this.updateItem(item);
    }

    onChangeNotes(event) {
        const item = this.props.item;
        item.notes = event.target.value;
        this.updateItem(item);
    }

    render() {
        let regularity;

        switch (this.props.item.regularity) {
            case 1:
                regularity = "Weekly";
                break;
            case 2:
                regularity = "Fortnightly";
                break;
            case 3:
                regularity = "Monthly";
                break;
        }

        return (
            <StyledRow dark={!(this.props.index % 2)}>
                <StyledTD>
                    <span>{this.props.item.title}</span>
                </StyledTD>
                <StyledTDCenter>
                    <StyledQuantityInput
                        type='text'
                        size='20'
                        value={this.props.item.quantity}
                        onChange={this.onChangeQuantity}
                        />
                </StyledTDCenter>
                <StyledTD>
                    <StyledTextInput
                        type='text'
                        maxlength='255'
                        value={this.props.item.notes}
                        onChange={this.onChangeNotes}
                        />
                </StyledTD>
                <StyledTDCenter>
                    <span>{regularity}</span>
                </StyledTDCenter>
            </StyledRow>
        )
    }
}