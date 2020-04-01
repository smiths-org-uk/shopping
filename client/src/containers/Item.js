import React from 'react';
import {Store} from '../redux/Store';
import Actions from '../redux/Actions';

export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.updateItem = this.updateItem.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
    }

    updateItem(changedItem) {
        Store.dispatch(Actions.setItem(this.props.key, changedItem));
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
            <div>
                <input
                    type='number'
                    value={this.props.item.quantity}
                    onChange={this.onChangeQuantity}
                />
                <span>{this.props.item.title}</span>
                <input
                    type='text'
                    value={this.props.item.notes}
                    onChange={this.onChangeNotes}
                />
            </div>
        )
    }
}