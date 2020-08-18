import React from 'react';

const Message = (props) => {
  const { author, content, created_at} = props.message
  return (
    <div className="message">
      <p>{author}</p>
      <p>{content}</p>
      <p>{created_at}</p>
    </div>
  );
};

export default Message;
