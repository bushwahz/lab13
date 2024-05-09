import './App.css'
import Nav from './Nav'
import Appointments from './Appointments.js'

let date = new Date()

let singleUser = {
  name: 'Jane Smith',
  todaysDate: date.toDateString(),
}

let allCustomers = [
  {
    firstName: 'Shawn',
    lastName: 'Lennon',
    appointmentTime: '1:00PM',
  },
  {
    firstName: 'Jewel',
    lastName: 'Ronnie',
    appointmentTime: '2:00PM',
  },
  {
    firstName: 'Martie',
    lastName: 'Francis',
    appointmentTime: '3:00PM',
  },
]

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
      <Appointments customers={allCustomers}/>
    </div>
  )
}

export default App