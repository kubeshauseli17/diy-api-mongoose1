import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function EditBounty() {
    const [form, setForm] = useState({
        name: '',
        wantedFor: '',
        client: '',
        reward: 0,
        lastSeen: '',
        ship: '',
        captured: false
    })
    const [errorMessage, setErrorMessage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getBounty = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounty/${id}`)
                // console.log(response.data)
                setForm(response.data)
            } catch (err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBounty() 
    }, [])
    
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // axios.put/.post('url', data for the reqeust body)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/bounty/${id}`, form)
            // navigate back to the details page for this bounty
            navigate(`/bounties/${id}`)
            
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>Edit Bounty:</h1>

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

                <button type='submit'>Submit Edits</button>
            </form>

            <Link to={`/blog/${id}`}>Go Back</Link>
        </div>
    )
}