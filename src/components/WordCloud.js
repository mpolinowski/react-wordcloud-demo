import React, {
  Component,
  PropTypes,
} from 'react';

/**
 * Import styles
 * Could be splitted into components
 */
import 'normalize.css';
import './WordCloud.css';

/**
 * Import Elements
 */
import Cloud from '../components/Cloud';
import Sidebar from '../components/Sidebar';

export default class WordCloud extends Component {

  /**
   * Set initial state of component
   * @param  {Object} props Props of component
   * @return {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: null,
    };
    this.onSelectTopic = this.onSelectTopic.bind(this);
  }


  /**
   * Click handler
   * @param  {String} topic Whole topic object
   * @return {void}
   */
  onSelectTopic(topic) {
    this.setState({
      selectedTopic: topic,
    });
  }


  /**
   * Compose components
   * @return {ReactElement} [description]
   */
  render() {
    const {
      fontName,
      fontSizes,
      height,
      topics,
      width,
    } = this.props;


    if (topics.length === 0) {
      return (<span>No topics available.</span>);
    }

    return (
      <section className="wordcloud">
        <h1 className="wordcloud__title">WordCloud</h1>
        <Cloud
          fontName={fontName}
          fontSizes={fontSizes}
          height={height}
          onSelectTopic={this.onSelectTopic}
          selectedTopic={this.state.selectedTopic}
          topics={topics}
          width={width}
        />
        <Sidebar
          topic={this.state.selectedTopic}
        />
      </section>
    );
  }
}

WordCloud.propTypes = {
  fontName: PropTypes.string,
  fontSizes: PropTypes.array,
  height: PropTypes.number,
  topics: PropTypes.array,
  width: PropTypes.number,
};

WordCloud.defaultProps = {
  fontName: 'Helvetica Neue',
  fontSizes: [13, 16, 20, 26, 35, 49],
  height: 400,
  topics: [],
  width: 400,
};
