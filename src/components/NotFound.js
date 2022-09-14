import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found-heading">Sorry</h2>
      <p className="not-found-p">That page cannot be found</p>
      <Link className="link-to-home" to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;