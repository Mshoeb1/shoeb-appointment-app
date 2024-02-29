import {Link} from 'react-router-dom'

import './index.css'

const Welcome = () => (
  <div className="main-container">
    <img
      src="https://res.cloudinary.com/dwekbzmuw/image/upload/v1709115960/appointment-scheduling-blog-810x405_yzggug.png"
      alt="appointment"
      className="image"
    />
    <h1 className="heading">Click Here to Check Your Appointments</h1>
    <Link to="/appointments" className="link">
      <button type="button" className="button">
        Click Here
      </button>
    </Link>
  </div>
)

export default Welcome
