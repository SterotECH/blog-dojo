import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('tECH');
  const [isSaving, setIsSaving] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsSaving(true);

    fetch(' http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.info('New Blog added');
      setIsSaving(false);
    });
    history.push('/');
  };
  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form action='post' onSubmit={handleSubmit}>
        <label htmlFor='title'>Blog Title:</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor='body'>Blog Body:</label>
        <textarea
          name='body'
          id='body'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor='author'>Blog author</label>
        <select
          name='author'
          id='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value='stero'>Stero</option>
          <option value='tECH'>tECH</option>
        </select>
        {!isSaving && <button>Add Blog</button>}
        {isSaving && <button>Saving Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
