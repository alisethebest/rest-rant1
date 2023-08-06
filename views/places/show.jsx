const React = require("react");
const Def = require("../default");

function show(data) {
  const styles = {
    section: {
      margin: "20px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    image: {
      width: "100%",
      height: "auto",
      maxWidth: "500px",
    },
  };
 let comments = (
  <h3 className="inactive">
    No comments yet!
  </h3>
 )
 if (data.place.comments.length) {
   comments = data.place.comments.map((c) => {
     return (
       <div className="border">
         <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
         <h4>{c.content}</h4>
         <h3>
           <stong>- {c.author}</stong>
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
        <section style={styles.section}>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </section>
      </main>
    </Def>
  );
}

module.exports = show;