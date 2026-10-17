
function Card({ image, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top destination-image"
          alt={title}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">
            {description}
          </p>

          <button className="btn btn-primary mt-auto">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
