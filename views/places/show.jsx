const React = require("react");
const Def = require("../default");

function show(data) {
  const styles = {
    // Define your custom styles here if needed
  };

  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😃"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }

  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} style={styles.image} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h2>Description</h2>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>

        <section style={styles.section}>
          <h2>Rating</h2>
          <p>Currently unrated.</p>
        </section>

        <section style={styles.section}>
          <h2>Comments</h2>
          {comments}
        </section>

        {/* Comment Form */}
        <section style={styles.section}>
          <h2>Add a Comment</h2>
          <form method="POST" action={`/places/${data.place._id}/rant`}>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="number"
                className="form-control"
                id="stars"
                name="stars"
                step="0.5"
                required
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rant"
                name="rant"
              />
              <label className="form-check-label" htmlFor="rant">
                Rant
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
    </Def>
  );
}

module.exports = show;
