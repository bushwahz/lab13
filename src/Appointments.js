export default function Appointments({customers}) {
    
  let customersArray = customers
 
 

   return(
     <table className="appointmentsTable">
       <thead>
         <tr>
           <td>First Name</td>
           <td>Last Name</td>
           <td>Appointment Time</td>
         </tr>
       </thead>
       <tbody>
         {customersArray.map((customer, index) => (
           <tr key={index} >
             <td>{customer.firstName}</td>
             <td>{customer.lastName}</td>
             <td>{customer.appointmentTime}</td>
           </tr>
         ))}
       </tbody>
     </table>
   )
 }