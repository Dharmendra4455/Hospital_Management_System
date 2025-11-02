import React, { useState } from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
const Appointmentform = (props) => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [Gfirstname, setGfirstname] = useState("")
  const [Glastname, setGlastname] = useState("")
  const [dob, setdob] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [conformpassword, setconformpassword] = useState("")
  const [gender, setgender] = useState("")
  const [contact, setcontact] = useState("")
  const [address, setaddress] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [department, setdepartment] = useState("")
  const [doctor, setdoctor] = useState("")
  const [salary, setsalary] = useState("")
  const [checkbox, setcheckbox] = useState()
  const [status, setstatus] = useState("Pending")
  const [appointmentdate, setappointmentdate] = useState(new Date().toDateString())
  const [alloteddate, setalloteddate] = useState("null")
  const [allotedtime, setallotedtime] = useState("null")
  const [description, setdescription] = useState("Building no.121 2nd floor room no.23 ")

  // for doctor create form
  const [dayfrom, setdayfrom] = useState("")
  const [dayto, setdayto] = useState("")
  const [timefrom, settimefrom] = useState("")
  const [timeto, settimeto] = useState("")


  const [close, setclose] = useState(false)


  // console.log(firstname+dob+email+gender+contact+address+city+state+department+salary)    
  const doctor_detail = { firstname, lastname, dob, email, password, gender, contact, address, city, state, department, salary, dayfrom, dayto, timefrom, timeto}
  // alert(doctor_detail)
  const submithandler = () => {
    console.log(doctor_detail)
    if (props.data === 'Admin') {
      if (firstname && dob && email && password && gender && contact && address && city && state && department && salary && dayfrom && dayto && timefrom && timeto) {
        if (contact.length == 10) {

          if (password === conformpassword) {
            Axios.post('http://localhost:4000/doctor/signup', doctor_detail)
              .then(response => {
                console.log('API response:', response.data);
                toast.success(response.data.message || 'Doctor created!');
                setfirstname("")
                setlastname("")
                setdob("")
                setemail("")
                setpassword("")
                setconformpassword("")
                setgender("")
                setcontact("")
                setaddress("")
                setcity("")
                setstate("")
                setdepartment("")
                setsalary("")
                setdayfrom("")
                setdayto("")
                settimefrom("")
                settimeto("")
                 closehandler()

              })
              .catch(error => {
                console.error('API error:', error);
                if (error.response && error.response.data && error.response.data.message) {
                  toast.error(error.response.data.message);
                } else {
                  toast.error("Something went wrong");
                }
              });
          }
          else {
            toast.error("Conform password mismatch!!")
          }
        }
        else {
          toast.error("Enter correct Contact Number!!")
        }
      }
      else {
        toast.error("Some details missing")
      }
      
    }
    else {
      alert(firstname + Gfirstname + dob + email + gender + contact + address + city + state + department + doctor)

      if (firstname && Gfirstname && dob && email && gender && contact && address && city && state && department && doctor) {
        const appointment_detail = { firstname, lastname, dob, email, gender, contact, address, city, state, department, doctor, status, appointmentdate, alloteddate, allotedtime, description }
        if (contact.length == 10) {


          Axios.post('http://localhost:4000/user/appointment', appointment_detail)
            .then(response => {
              console.log('API response:', response.data);
              toast.success(response.data.message || 'Appointment created!');
              setfirstname("")
              setlastname("")
              setdob("")
              setemail("")
              setgender("")
              setcontact("")
              setaddress("")
              setcity("")
              setstate("")
              setdepartment("")
              setdoctor("")
               closehandler()

            })
            .catch(error => {
              console.error('API error:', error);
              if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
              } else {
                toast.error("Something went wrong");
              }
            });

        }
        else {
          toast.error("Enter correct Contact Number!!")
        }
      }
      else {
        toast.error("Some details missing")
      }
    }

     
  }
  const closehandler = () => {
    document.getElementById('my_modal_1').close()
     setfirstname("")
                setlastname("")
                setdob("")
                setemail("")
                setpassword("")
                setconformpassword("")
                setgender("")
                setcontact("")
                setaddress("")
                setcity("")
                setstate("")
                setdepartment("")
                setsalary("")
                setdayfrom("")
                setdayto("")
                settimefrom("")
                settimeto("")
  }
  return (
    <>
      {close ? "" : <div className="modal-box bg-white">
        {props.data === "User" ? <h3 className="font-bold text-lg text-center">Appointment Request</h3> : <h3 className="font-bold text-lg text-center">Doctor's Details</h3>}

        <button onClick={closehandler} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>

        <form action={submithandler}>

          <div className="form_content ">
            <label className='text-md mt-4'>Name<sup className='text-red-600 text-xl'>*</sup></label>
            <label className="first_lastname flex">
              <input className="first border p-1 rounded" required value={firstname} onChange={(e) => { setfirstname(e.target.value) }}placeholder='firstname'></input>
              <input className="lastname border p-1 ml-5 rounded" value={lastname}  onChange={(e) => { setlastname(e.target.value) }}  placeholder='lastname'></input>
            </label>
            {props.data === "User" ? <div className="Guardian Name mt-2">Guardian Name <sup className='text-red-600 text-xl'>*</sup></div> : ""}
            {props.data === "User" ? <input className="first border p-1 rounded" required placeholder='First Name' onChange={(e) => { setGfirstname(e.target.value) }} value={Gfirstname}></input> : ""}
            {props.data === "User" ? <input className="lastname border p-1 ml-5 rounded" placeholder='Last Name' onChange={(e) => { setGlastname(e.target.value) }} value={Glastname}></input> : ""}
            <div className='text-md mt-4'>DateOfBirth<sup className='text-red-600 text-xl'>*</sup></div>
            <input className="first border p-1 rounded w-[400px]" required type='date' onChange={(e) => { setdob(e.target.value) }} ></input>
            <div className='text-md mt-4'>Email<sup className='text-red-600 text-xl'>*</sup></div>
            <input className="first border p-1 rounded w-[400px]" required value={email} placeholder="xyz@gmail.com" onChange={(e) => { setemail(e.target.value) }} ></input>

            {props.data === 'Admin' ?
              <div className="password mt-2">
                <label className='text-md mt-5'>Password<sup className='text-red-600 text-xl '>*</sup></label>
                <label className=" flex ">
                  <input className="first border p-1 rounded" required type='password' value={password} onChange={(e) => {
                    setpassword(e.target.value)
                  }}></input>

                  <input className="lastname border p-1 ml-5 rounded" type='text' value={conformpassword} onChange={(e) => { setconformpassword(e.target.value) }} placeholder='Conform Password' ></input>
                </label></div> : ""}


            <div className="gendercontact flex justify-start  gap-4 mt-2">
              <div className="genderbox">
                <div className='text-md '>Gender<sup className='text-red-600 text-xl'>*</sup></div>
                <select className="text-sm p-1.5 rounded border w-48" value={gender} onChange={(e) => { setgender(e.target.value) }} >
                  <option unselectable=''>Select Gender</option>
                  <option value='MALE' >MALE</option>
                  <option value="FEMALE" >FEMALE</option>
                  <option value='OTHER'>OTHER</option>
                </select>
              </div>
              <div className="contact">
                <div className="contact  ml-1">Contact No.s<sup className='text-red-600 text-xl'  >*</sup></div>
                <input type="tel" placeholder='00000-00000' className=" border p-1 rounded" required value={contact} onChange={(e) => { setcontact(e.target.value) }} />
              </div>
            </div>
            <div className='text-md mt-4'>Address<sup className='text-red-600 text-xl'>*</sup></div>
            <input className="first border p-1 rounded w-[400px]" type='text' required value={address} onChange={(e) => { setaddress(e.target.value) }} ></input>
            <div className="citystate flex justify-start">
              <div className="city">
                <div className="city mt-2 ">City</div>
                <input className="first border p-1 rounded" required value={city} onChange={(e) => { setcity(e.target.value) }} ></input>
              </div>
              <div className="state">
                <div className="state mt-2 ml-6 ">State/Provinces</div>
                <select className="lastname border p-1 ml-5 rounded w-[190px]" value={state} onChange={(e) => { setstate(e.target.value) }} >
                  <option >Select State</option>
                  <option >Andhra Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Punjab</option>
                  <option>Uttar Pradesh</option>
                </select>
              </div>
            </div>
            <div className="deptdoc flex flex-start">
              <div className="dept">
                <div className="state mt-2 ">Department</div>
                <select className="lastname border p-1 rounded w-[190px]" value={department} onChange={(e) => { setdepartment(e.target.value) }} >
                  <option >Select Department</option>
                  <option >Cardiology</option>
                  <option >Neurology</option>
                  <option >Oncology</option>
                  {/* <option >Dermatology</option> */}
                  <option >Gastroenterologys</option>
                </select>
              </div>
              {props.data === "User" ?
                <div className='doct'>
                  <div className="state mt-2 ml-6 inline-block ">Doctors</div>
                  <select className="lastname border p-1 ml-5 rounded w-[190px] " value={doctor} onChange={(e) => { setdoctor(e.target.value) }}>
                    <option >Select Doctor</option>
                    <option >Dr.Smith</option>
                    <option >Dr.Rohan Mehra</option>
                    <option >Dr.Rupali</option>
                    <option >Dr.Anjay</option>
                    <option >Dr.Patel</option>
                  </select>
                </div>
                :
                <div className='salary'>
                  <div className="state mt-2 ml-6  ">Salary</div>
                  <input type="text" className=" border p-1 rounded ml-5" required value={salary} onChange={(e) => { setsalary(e.target.value) }} />
                </div>}
            </div>
            {props.data === 'Admin' ?
              <div className="from mt-2">
                <label className='text-md mt-5'>Available Days<sup className='text-red-600 text-xl '>*</sup></label>
                <label className=" flex justify-between">
                  <input className="first border p-1 rounded w-36" placeholder='Monday' required type='text' value={dayfrom} onChange={(e) => {
                    setdayfrom(e.target.value)
                  }}>
                  </input>
                  <h2 >TO</h2>
                  <input className="to border p-1 ml-5 rounded w-36" type='text'value={dayto} onChange={(e) => { setdayto(e.target.value) }} placeholder='Friday ' ></input>
                </label></div> : ""}
                 {props.data === 'Admin' ?
              <div className="from mt-2">
                <label className='text-md mt-5'>Available Timing<sup className='text-red-600 text-xl '>*</sup></label>
                <label className=" flex justify-between">
                  <input className="first border p-1 rounded w-36" placeholder='10:30 AM' required type='text' value={timefrom} onChange={(e) => {
                    settimefrom(e.target.value)
                  }}>
                  </input>
                  <h2 >TO</h2>
                  <input className="to border p-1 ml-5 rounded w-36" type='text' value={timeto} onChange={(e) => { settimeto(e.target.value) }} placeholder='5:00 PM ' ></input>
                </label></div> : ""}
            <input type="checkbox" className='mt-4' required value={checkbox} onChange={(e) => { setcheckbox(e.target.checked) }} />
            <span className='ml-2 text-sm'>All details are Correct and Verified</span>
          </div>


          {/* if there is a button in form, it will close the modal */}
          <div className='flex justify-center gap-5 mt-5'>

            {props.data === "User" ? <button className="btn bg-blue-600">Submit</button> : <button className="btn bg-blue-600" >Create Doctor</button>}
            {/* <button className="btn bg-red-500" type='reset' >Reset</button> */}
          </div>
        </form>
      </div>}
    </>
  )
}

export default Appointmentform