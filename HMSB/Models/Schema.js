import mongoose from 'mongoose'

// Doctor Card 
const Doctorcard = mongoose.Schema({
    Name: String,
    Photolink: String,
    Specialist: String,
    Degree: String
}, {
    timestamps: true//this enable automatic created an updated time
}
)

// Service Card
const Servicecard = mongoose.Schema({
    Name: String,
    Photolink: String
},
    {
        timestamps: true//this enable automatic created an updated time
    }
)

// User
const User = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    Dateofbirth: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true//this enable automatic created an updated time
})

// Admin 
const Admin = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    Dateofbirth: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true//this enable automatic created an updated time
})

//   Doctor
const Doctor = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    dob: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gender: String,
    contact: Number,
    address: String,
    city: String,
    state: String,
    department: String,
    salary: String,
    Availability:{type:Boolean,default:true},
    Availabledayfrom:String,
    Availabledayto:String,
    Availabletimefrom:String,
    Availabletimeto:String,

}, {
    timestamps: true//this enable automatic created an updated time
}
)
// appointment Update by Doctor
const appointmentsupdate = mongoose.Schema({
    status:{ type: String, default:"Normal"},
    healthrate:{type:String},
    description:String,
},
{
    timestamps: true//this enable automatic created an updated time
})

// Appointment Schema
const appointments = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    dob: {type : String, required : true },
    email: { type: String ,required: true,},
    gender:  { type: String, required: true },
    contact: {type : Number ,required : true , unique : true},
    allocateddoctor:String,
    address: String,
    city: String,
    state: String,
    department:  { type: String, required: true },
    doctor: String,
    status: { type: String, default: "Pending" },
    update:[appointmentsupdate],
    appointmentdate: { type: String, default: new Date().toDateString() },
    alloteddate: { type: String, default: null },
    allotedtime: { type: String, default: null },
    
}, {
    timestamps: true  //this enable automatic created an updated time
})
export const doctorcard = mongoose.model('DoctorCard', Doctorcard);
export const servicecard = mongoose.model('ServiceCard', Servicecard);
export const Users = mongoose.model('User', User)
export const admin = mongoose.model('Admin', Admin)
export const doctor = mongoose.model('Doctors', Doctor)
export const appointment = mongoose.model('Appointments', appointments)