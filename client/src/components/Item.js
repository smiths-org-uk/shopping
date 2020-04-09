import React from 'react';
import {Store} from '../redux/Store';
import Actions from '../redux/Actions';
import styled from 'styled-components';

const StyledItemRow = styled.div`
    width: 100%;
    background: ${props => props.dark ? "#eee" : "#fff"}
`;

const StyledSection = styled.div`
    display: inline-block;
    width: calc(${props => props.width} - 20px);
    padding: 3px 10px;
`;

const StyledSectionCentered = styled(StyledSection)`
    text-align: center;
`;

const StyledTextInput = styled.input`
    width: calc(100% - 6px);
    font-size: 12px;
`;

const StyledFaint = styled.span`
    color: #aaa;
    font-style: italic;
    font-size: 10px;
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
                regularity = "Frequent";
                break;
            case 2:
                regularity = "Not-so-frequent";
                break;
            case 3:
                regularity = "Occasionally";
                break;
            default:
                regularity = "";
                break;
        }

        return (
            <StyledItemRow dark={!(this.props.index % 2)}>
                <StyledSectionCentered width={this.props.regularityWidth}>
                    {regularity}
                </StyledSectionCentered>
                <StyledSection width={this.props.titleWidth}>
                    {this.props.item.title}<StyledFaint> - {this.props.item.category}</StyledFaint>
                </StyledSection>
                <StyledSectionCentered width={this.props.quantityWidth}>
                    <StyledTextInput
                        type='text'
                        maxLength='20'
                        value={this.props.item.quantity}
                        onChange={this.onChangeQuantity}
                        />
                </StyledSectionCentered>
                <StyledSection width={this.props.notesWidth}>
                    <StyledTextInput
                        type='text'
                        maxLength='255'
                        value={this.props.item.notes}
                        onChange={this.onChangeNotes}
                        />
                </StyledSection>
            </StyledItemRow>
        )
    }
}