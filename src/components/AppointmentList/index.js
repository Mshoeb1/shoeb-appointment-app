import {
  BsCalendar4Week,
  BsClockHistory,
  BsThreeDotsVertical,
} from 'react-icons/bs'
import {MdStars} from 'react-icons/md'
import './index.css'

const AppointmentList = props => {
  const {details} = props
  const {
    patientName,
    mobileNumber,
    appointmentDate,
    appointmentTime,
    doctor,
    injury,
  } = details
  const initial = patientName[0]

  return (
    <li className="my-list">
      <div className="patient-container">
        <h1 className="initial">{initial}</h1>
        <div className="body-container">
          <h1 className="p1">{patientName}</h1>
          <p className="p2">{mobileNumber}</p>
        </div>
      </div>
      <div className="item-con-1">
        <p className="p3">
          {' '}
          <span className="span">
            <BsCalendar4Week size={25} class="icon" />
          </span>
          {appointmentDate}
        </p>
      </div>
      <div className="item-con-2">
        <p className="p4">
          {' '}
          <span className="span">
            <BsClockHistory size={25} class="icon" />
          </span>
          {appointmentTime}
        </p>
      </div>
      <div className="item-con-3">
        <p className="p5">
          {' '}
          <span className="span">
            <MdStars size={25} class="icon" />
          </span>
          {doctor}
        </p>
      </div>
      <div className="item-con-4">
        <p className="p6">
          <span className="span-injury">{injury}</span>
        </p>
      </div>
      <div className="item-con-5">
        <p className="p7">
          <BsThreeDotsVertical size={25} class="icon" />
        </p>
      </div>
    </li>
  )
}

export default AppointmentList
