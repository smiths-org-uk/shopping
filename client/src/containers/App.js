import React from 'react';
import styled from 'styled-components'
import { Store } from '../redux/Store';
import Middleware from '../redux/Middleware';
import Title from '../components/Title';
import SaveButton from '../components/SaveButton';
import ResetButton from '../components/ResetButton';
import ItemTable from './ItemTable';

const StyledApp = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: Store.getState().items
    }

    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        items: Store.getState().items
      })
    })

    Store.dispatch(Middleware.fetchItems());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  save() {
    Store.dispatch(Middleware.saveItems(this.state.items));
  }

  reset() {
    Store.dispatch(Middleware.resetItems());
  }

  render() {
    return (
      <StyledApp>
        <Title />
        <ItemTable items={this.state.items} />
        <div>
          <SaveButton onSave={this.save} />
        </div>
        <div>
          <ResetButton onReset={this.reset} />
        </div>
      </StyledApp>
    );
  }
}
