import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/posts");

        setPosts(response.data.slice(0, 12));
      } catch (err) {
        setError("Failed to load posts. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="mt-3">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>

        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="container py-5">
      {/* <h1 className="text-center mb-2">
        Latest Posts
      </h1>

      <p className="text-center text-secondary mb-5">
        Posts loaded from a Fake API using Axios
      </p> */}

      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-12 col-md-6 col-lg-4" key={post.id}>
            <div className="card post-card h-100 shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.id}/600/350`}
                className="card-img-top post-image"
                alt={`Post ${post.id}`}
                loading="lazy"
              />

              <div className="card-body d-flex flex-column">
                {/* <span className="badge text-bg-primary align-self-start mb-3">
                  Post #{post.id}
                </span> */}

                <h5 className="card-title">{post.title}</h5>

                <p className="card-text text-secondary">{post.body}</p>

                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => navigate(`/posts/${post.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-modal-title"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedPost(null)}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="post-modal-title">
                  {selectedPost.title}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setSelectedPost(null)}
                />
              </div>

              <div className="modal-body">
                <p>{selectedPost.body}</p>
                <small className="text-secondary">
                  Post ID: {selectedPost.id}
                </small>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedPost(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
