import React from 'react';
import styled from 'styled-components'
import { Store } from '../redux/Store';
import Middleware from '../redux/Middleware';
import Title from '../components/Title';
import DeliveryDate from '../components/DeliveryDate';
import SaveButton from '../components/SaveButton';
import ResetButton from '../components/ResetButton';
import ItemTable from '../components/ItemTable';

const StyledApp = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`

const StyledFooter = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
`

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: Store.getState().items,
      deliveryDate: Store.getState().deliveryDate
    }

    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        items: Store.getState().items,
        deliveryDate: Store.getState().deliveryDate
      })
    })

    Store.dispatch(Middleware.fetchItems());
    Store.dispatch(Middleware.fetchDeliveryDate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  save() {
    Store.dispatch(Middleware.save(this.state.items, this.state.deliveryDate));
    
  }

  reset() {
    Store.dispatch(Middleware.reset());
  }

  render() {
    return (
      <StyledApp>
        <Title />
        <DeliveryDate deliveryDate={this.state.deliveryDate} />
        <ItemTable items={this.state.items} />
        <SaveButton onSave={this.save} />
        <ResetButton onReset={this.reset} />
        <StyledFooter>
          Developed by Matt Smith, BSc. Hons.
        </StyledFooter>
      </StyledApp>
    );
  }
}
