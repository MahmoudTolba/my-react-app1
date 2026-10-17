
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

function PostDetails() {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError('')
        setPost(null)

        const response = await api.get(`/posts/${id}`)
        setPost(response.data)
      } catch (err) {
        setError('Failed to load post. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading post details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  if (!post || !post.id) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Post not found.
        </div>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm post-details-card">
            <img
              src={`https://picsum.photos/seed/${post.id}/1000/450`}
              className="post-details-image"
              alt={`Post ${post.id}`}
            />

            <div className="card-body p-4 p-md-5">
              <span className="badge text-bg-primary mb-3">
                Post #{post.id}
              </span>

              <h1 className="mb-4 text-capitalize">
                {post.title}
              </h1>

              <p className="text-secondary post-details-text">
                {post.body}
              </p>

              <hr />

              <p className="text-secondary">
                Author ID: {post.userId}
              </p>

              <Link to="/" className="btn btn-primary mt-3">
                ← Back to Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
