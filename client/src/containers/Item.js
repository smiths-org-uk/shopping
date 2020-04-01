import React from 'react';
import {Store} from '../redux/Store';
import Actions from '../redux/Actions';
import styled from 'styled-components';

const StyledTD = styled.td`
    padding: 10px 20px;
`;

const StyledTDQuantity = styled(StyledTD)`
    text-align: center;
`;

const StyledNumberInput = styled.input`
    font-size: 20px;
    width: 50px;
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
        item.quantity = parseInt(event.target.value);
        this.updateItem(item);
    }

    onChangeNotes(event) {
        const item = this.props.item;
        item.notes = event.target.value;
        this.updateItem(item);
    }

    render() {
        return (
            <tr>
                <StyledTD>
                    <span>{this.props.item.title}</span>
                </StyledTD>
                <StyledTDQuantity>
                    <StyledNumberInput
                        type='number'
                        value={this.props.item.quantity}
                        onChange={this.onChangeQuantity}
                    />
                </StyledTDQuantity>
                <StyledTD>
                    <StyledTextInput
                        type='text'
                        value={this.props.item.notes}
                        onChange={this.onChangeNotes}
                    />
                </StyledTD>
            </tr>
        )
    }
}