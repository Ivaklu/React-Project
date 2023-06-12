import React, { useState } from 'react';

function Comment() {
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
    setComments([...comments, text]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Оставить комментарий:
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <button type="submit">Отправить</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;
