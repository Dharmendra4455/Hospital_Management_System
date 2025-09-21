import mongoose from 'mongoose'
const Doctorcard = mongoose.Schema({
    Name: String,
    Photolink: String,
    Specialist: String,
    Degree: String
}, {
    timestamps: true//this enable automatic created an updated time
}
)
const Servicecard = mongoose.Schema({
    Name: String,
    Photolink: String
},
    {
        timestamps: true//this enable automatic created an updated time
    }
)
const User = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    Dateofbirth: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    //  address:[
    //             {street:String,
    //              city:String,
    //              zip:String,
    //              state:String,
    //              Country:String},
    //             ],
    //     contact_no:String, 
    // department:String,
    // Disease:String,
    // bed_No:Number,
    // Doctor:String,
    // admit_date:Date,
    // discharge_date:Date,
}, {
    timestamps: true//this enable automatic created an updated time
}
)
const Admin = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    Dateofbirth: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true//this enable automatic created an updated time
}
)
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
const appointmentsupdate = mongoose.Schema({
    patientstatus:{ type: String, default:"Normal"},
    rating:Number,
    description:String,
})
const appointments = mongoose.Schema({
     appointmentid:{type:String, default:Date.now().toString(), unique: true},
    firstname: { type: String, required: true },
    lastname: String,
    Dateofbirth: String,
    email: { type: String, unique: true, required: true },
    gender: String,
    contact: Number,
    address: String,
    city: String,
    state: String,
    department: String,
    doctor: String,
    status: { type: String, default: "Pending" },
     update:[appointmentsupdate],
    appointmentdate: { type: String, default: new Date().toDateString() },
    alloteddate: { type: String, default: "null" },
    allotedtime: { type: String, default: "null" },
    
}, {
    timestamps: true//this enable automatic created an updated time
}
)
export const doctorcard = mongoose.model('DoctorCard', Doctorcard);
export const servicecard = mongoose.model('ServiceCard', Servicecard);
export const Users = mongoose.model('User', User)
export const admin = mongoose.model('Admin', Admin)
export const doctor = mongoose.model('Doctors', Doctor)
export const appointment = mongoose.model('Appointments', appointments)