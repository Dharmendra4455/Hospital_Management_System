import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5,  label: 'Departments' },
  { value: 10, label: 'Departments' },
  { value: 15, label: 'Departments' },
  { value: 20, label: 'Departments' },
  { value: 5,  label: 'Departments' },
  { value: 10, label: 'Departments' },

];

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}


export default function PieChartWithCenterLabel({appointments,doctors}) {

  const getdata=()=>{
    var data =[]
    var cardiologycount=0
    var Neurologycount=0
    var Oncologycount=0
    var Gastroenterologycount=0
    const currentdata = doctors ? doctors :appointments
    for(let i=0 ; i<currentdata?.length ;i++){
     if(currentdata[i].department=='Cardiology') cardiologycount++
      // data[i]={value: cardiologycount ,  label: 'Cardiology'}
     if(currentdata[i].department=='Neurology') Neurologycount++
      // data[i]={value: Neurologycount ,  label: 'Neurology'}
     if(currentdata[i].department=='Oncology') Oncologycount++
      // data[i]={value: Oncologycount ,  label: 'Oncology'}
     if(currentdata[i].department=='Gastroenterologys')Gastroenterologycount++
      // data[i]={value: Gastroenterologycount ,  label: 'Gastroenterology'} 
    }
   data=[
     Gastroenterologycount > 0 ? {value: Gastroenterologycount ,  label: 'Gastroenterologys'}:"",
     Oncologycount > 0 ? {value: Oncologycount ,  label: 'Oncology'}:"",
     Neurologycount > 0 ? {value: Neurologycount ,  label: 'Neurology'}:"",  
     cardiologycount > 0 ? {value: cardiologycount ,  label: 'Cardiology'}:""
   ]
    return data
  }
  const[data ,setdata] =React.useState([])

  React.useEffect(()=>{
  setdata(getdata())
 
  },[appointments,doctors])

  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Total Appointments</PieCenterLabel>
    </PieChart>
  );
}
