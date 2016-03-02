import 'babel-polyfill';
import React, {
  Component,
} from 'react';
import { render } from 'react-dom';
import { WordCloud } from '../src/index';

/**
 * Just for demo and development purposes
 */
class App extends Component {

  /**
   * Set initial state of component
   * @param  {Object} props Props of component
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      topics: [],
      isFetching: true,
    };
  }

  /**
   * Fetch data after mounting
   * @return {[type]} [description]
   */
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/grahamscott/65b43572ad18c5fbdd87/raw/00a632b43ea6bd36783c16149324139a9e764447/topics.json')
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (response.ok) {
        this.setState({ topics: json.topics, isFetching: false });
      } else {
        this.setState({ error: response.statusText, isFetching: false });
      }
    })
    .catch(error => {
      this.setState({ error, isFetching: false });
    });
  }

  /**
   * Render WordCloud component
   * @return {ReactElement} WordCloud component
   */
  render() {
    return (
      <WordCloud
        error={this.state.error}
        isFetching={this.state.isFetching}
        topics={this.state.topics}
      />
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
