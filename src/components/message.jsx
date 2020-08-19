import React from 'react';


function stringToColor(str) { // java String#hashCode
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message">
      <div><span className="author" style={{ color: stringToColor(author) }}>{author}</span> - <span className="date">{time}</span></div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
