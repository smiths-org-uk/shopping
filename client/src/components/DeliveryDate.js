import React from 'react';
import styled from 'styled-components';
import Actions from '../redux/Actions';
import { Store } from '../redux/Store';

const StyledDeliveryDate = styled.div`
    margin: 5px 0;
    text-align: center;
    font-size: 12px;
`;

const StyledTextInput = styled.input`
    font-size: 12px;
`;

export default class DeliveryDate extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeDeliveryDate = this.onChangeDeliveryDate.bind(this);
    }

    onChangeDeliveryDate(event) {
        Store.dispatch(Actions.setDeliveryDate(event.target.value));
    }

    render() {
        return (
            <StyledDeliveryDate>
                <span>Hoped for delivery date - by or before: </span>
                <StyledTextInput
                    type='text'
                    maxLength='30'
                    value={this.props.deliveryDate}
                    onChange={this.onChangeDeliveryDate}
                    />
            </StyledDeliveryDate>
        )
    }
}