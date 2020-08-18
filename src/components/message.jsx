import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.author}</p>
      <p>{props.message}</p>
      <p>{props.created_at}</p>
    </div>
  );
};

export default Message;
