import React from 'react';

const Message = (props) => {
  const { author, content, created_at} = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message">
      <div><span className="author">{author}</span> - <span className="date">{time}</span></div>
      <p>{content}</p>
    </div>
  );
};

export default Message;
