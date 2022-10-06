import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    // bounties from the backend
    const [blogs, setBlogs] = useState([])
    // state for messages from the backend
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getBlogs = async () => {
            try {  
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)
                // console.log(response.data)
                // TODO: sort by date and only show the most recent bounties
                setBlogs(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }

        getBlogs()
    }, []) // only fire on page load

    const blogLinks = blogs.map(blog => {
        return (
            <div key={blog._id}>
                <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome to my blog!</h1>

            <h2>Most Recent Posts:</h2>

            {/* most recent TODO: sort by date */}
            {blogLinks}

            <p>{errorMessage}</p>

           
        </div>
    )
}