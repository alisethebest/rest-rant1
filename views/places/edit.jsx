const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form
          method="POST"
          action={`/places/${data.place.id}?_method=PUT`}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={data.place.name}
              required
              style={{ padding: "10px" }}
            />
          </div>
          <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              value={data.place.founded}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="pic">Place Picture</label>
            <input
              className="form-control"
              type="url"
              id="pic"
              name="pic"
              style={{ padding: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              id="city"
              name="city"
              style={{ padding: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="state">State</label>
            <input
              className="form-control"
              id="state"
              name="state"
              style={{ padding: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
              style={{ padding: "10px" }}
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Place"
            style={{ padding: "10px 15px", fontSize: "16px" }}
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
