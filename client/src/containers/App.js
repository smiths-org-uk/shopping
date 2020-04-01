import React from 'react';
import { Store } from '../redux/Store';
import Middleware from '../redux/Middleware';
import Title from '../components/Title';
import SaveButton from '../components/SaveButton';
import ResetButton from '../components/ResetButton';
import ItemList from '../containers/ItemList';

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
      <div>
        <Title />
        <SaveButton onSave={this.save} />
        <ItemList items={this.state.items} />
        <ResetButton onReset={this.reset} />
      </div>
    );
  }
}
