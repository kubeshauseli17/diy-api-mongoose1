import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewBounty() {
    // state to hold our form
    const [form, setForm] = useState({
        user: '',
        title: '',
        content: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // submit event handler
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form)
            // navigate back to /blog to see the new blog
            navigate('/blogs')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    };

    return (
        <div>
            <h1>New Blog:</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='user'>User:</label>
                    <input 
                        type='text'
                        id='user'
                        value={form.user}
                        placeholder='user name...'
                        onChange={e => setForm({ ...form, user: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='title'>Title:</label>
                    <input 
                        type='text'
                        id='title'
                        value={form.title}
                        placeholder='Blog title...'
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='content'>Content:</label>
                    <input 
                        type='text'
                        id='content'
                        value={form.content}
                        placeholder='enter content...'
                        onChange={e => setForm({ ...form, content: e.target.value })}
                    />
                </div>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
};