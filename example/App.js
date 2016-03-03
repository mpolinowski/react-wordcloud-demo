import 'babel-polyfill';
import React, {
  Component,
} from 'react';
import { render } from 'react-dom';
import { WordCloud } from 'react-wordcloud';

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
   * @return {void} Will call setState
   */
  componentDidMount() {
    fetch('topics.json')
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
    const {
      error,
      isFetching,
      topics,
    } = this.state;

    if (isFetching && error === null) {
      return (<span>Fetching some information...</span>);
    }
    if (error) {
      return (<span>Something went wrong while fetching the data.</span>);
    }
    return (
      <WordCloud
        topics={topics}
      />
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
