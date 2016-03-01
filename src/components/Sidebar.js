import React from 'react';

/**
 * [description]
 * @param  {Object} props Topic to display
 * @return {ReactElement}       [description]
 */
const Sidebar = (props) => {
  const { topic } = props || { topic: null };
  if (topic === null) {
    return (<div className="wordcloud__sidebar"><span>Select an element!</span></div>);
  }
  return (
    <div className="wordcloud__sidebar">
      <p className="wordcloud__sidebar_element">
        <span>Information on topic "{topic.label}"</span>
      </p>
      <p className="wordcloud__sidebar_element">
        <span>Total Mentions: {topic.volume}</span>
      </p>
      <p className="wordcloud__sidebar_element">
        <span>Positive Mentions: {topic.sentiment.positive || '0'}</span>
        <span>Neutral Mentions: {topic.sentiment.neutral || '0'}</span>
        <span>Negative Mentions: {topic.sentiment.negative || '0'}</span>
      </p>
    </div>
  );
};

export default Sidebar;
