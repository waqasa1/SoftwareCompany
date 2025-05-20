import React from 'react';

const ReadMoreText = ({ text, maxChars = 100, expanded }) => {
  const isLong = text.length > maxChars;
  const displayText = expanded || !isLong ? text : text.slice(0, maxChars) + '...';

  return <>{displayText}</>;
};

export default ReadMoreText;
