import React from 'react';
import expect, {
  createSpy,
  spyOn,
} from 'expect';
import {
  mount,
  shallow,
} from 'enzyme';
import Cloud from '../../src/components/Cloud';

/**
 * Fake topics.json
 * @type {Array}
 */
const topicsJson = [
  {
    id: '1751295897__Berlin',
    label: 'Berlin',
    volume: 165,
    type: 'topic',
    sentiment: {
      negative: 3,
      neutral: 133,
      positive: 29,
    },
    sentimentScore: 65,
    burst: 13,
  },
  {
    id: '1751295897__DJ',
    label: 'DJ',
    volume: 48,
    type: 'topic',
    sentiment: {
      neutral: 46,
      positive: 2,
    },
    sentimentScore: 54,
    burst: 29,
  },
];

/**
 * Fake output of d3-cloud. Generated inside Cloud after componentDidMount
 * @type {Array}
 */
const stateDimensions = [
  {
    id: '1751295897__Berlin',
    label: 'Berlin',
    volume: 165,
    type: 'topic',
    sentiment: {
      negative: 3,
      neutral: 133,
      positive: 29,
    },
    sentimentScore: 65,
    burst: 13,
    fontSize: 49,
    text: 'Berlin',
    font: 'Helvetica Neue',
    style: 'normal',
    weight: 'normal',
    rotate: 0,
    size: 49,
    padding: 10,
    x: 0,
    y: 0,
    width: 192,
    height: 98,
    xoff: 0,
    yoff: 0,
    x1: 96,
    y1: 48,
    x0: -96,
    y0: -46,
    hasText: true,
  },
];

function getComponentWithDefaultProps(
  onSelectTopic = () => {},
  fontName = 'Impact',
  fontSizes = [12, 16, 22, 31, 44, 64],
  height = 500,
  topics = topicsJson,
  width = 500
) {
  return (
    <Cloud
      fontName={fontName}
      fontSizes={fontSizes}
      height={height}
      onSelectTopic={onSelectTopic}
      topics={topics}
      width={width}
    />
  );
}

describe('<Cloud />', () => {
  it('renders', () => {
    const wrapper = shallow(getComponentWithDefaultProps());
    expect(wrapper.is('.wordcloud__container_cloud')).toEqual(true);
  });

  it('renders initial loading state', () => {
    const wrapper = shallow(getComponentWithDefaultProps());
    expect(wrapper.contains(<span >Loading...</span>)).toEqual(true);
  });

  it('handles click on topic', () => {
    const onTopicClick = createSpy();
    const wrapper = shallow(getComponentWithDefaultProps(onTopicClick));

    // Simulate result of d3-cloud
    wrapper.setState({
      cloudDimensions: stateDimensions,
      isProcessing: false,
    });
    wrapper.find('.wordcloud__cloud_label').simulate('click');
    expect(onTopicClick.calls.length).toEqual(1);
  });

  it('calls componentDidMount', () => {
    spyOn(Cloud.prototype, 'componentDidMount');
    mount(getComponentWithDefaultProps());
    expect(Cloud.prototype.componentDidMount.calls.length).toEqual(1);
    Cloud.prototype.componentDidMount.restore();
  });
});
