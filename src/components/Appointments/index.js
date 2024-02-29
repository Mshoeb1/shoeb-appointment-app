import {Component} from 'react'
import {Link} from 'react-router-dom'
import AppointmentList from '../AppointmentList'
import './index.css'

class Appointments extends Component {
  state = {data: []}

  componentDidMount() {
    this.getAppointmentData()
  }

  getAppointmentData = async () => {
    const url =
      'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const updatedData = await response.json()
      const formattedData = updatedData.appointments.map(eachItem => ({
        patientName: eachItem.patient_name,
        mobileNumber: eachItem.mobile_number,
        appointmentDate: eachItem.appointment_date,
        appointmentTime: eachItem.appointment_time,
        doctor: eachItem.doctor,
        injury: eachItem.injury,
      }))

      this.setState({data: formattedData})
    } else {
      console.log('Bad Request')
    }
  }

  render() {
    const {data} = this.state
    console.log(data)

    return (
      <div className="appointment-container">
        <div className="sub-container">
          <h1 className="sub-heading">Todays Appointments List</h1>
          <div className="header-container">
            <p className="name">PATIENT</p>
            <p className="date">DATE</p>
            <p className="time">TIME</p>
            <p className="doctor">DOCTOR</p>
            <p className="injury">INJURY</p>
            <p className="action">ACTION</p>
          </div>
          <ul className="appointments-list">
            {data.map(each => (
              <AppointmentList details={each} key={each.mobileNumber} />
            ))}
          </ul>
          <Link to="/" className="link">
            <button type="button" className="button">
              Back
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Appointments
