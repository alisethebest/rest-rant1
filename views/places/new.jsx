const React = require("react");
const Def = require("../default");

function New(data) {
  let message = "";
  if (data.message) {
    message = <h4 className="alert alert-danger">{data.message}</h4>;
  }

  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <link rel="stylesheet" href="style.css" />
        <form method="POST" action="/places">
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded Year</label>
            <input
              type="number"
              className="form-control"
              id="founded"
              name="founded"
              defaultValue={new Date().getFullYear()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-control" type="url" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-control" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div>

          {/* New fields for Comment and Rating */}
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              rows="4"
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
              min="0"
              max="5"
            />
          </div>

          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = New;
