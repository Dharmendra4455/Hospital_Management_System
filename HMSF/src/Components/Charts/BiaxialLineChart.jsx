import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const patientData = [4, 3, 7, 7, 8, 2, 5];
const NormalData = [5,5,5,5,5,5,5];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BiaxialLineChart({data}) {
  
  const getvalues =()=>{
  var val=[]
   let i=0
   while(i < data.update.length){
     val[i]=Number(data.update[i].healthrate) || 5 //otherwise make it normal
     i++
   }
   return val
  }
  const getNormalvalues =()=>{
  var val=[]
   let i=0
   while(i < data.update.length){
     val[i]= 5 //otherwise make it normal
     i++
   }
   return val
  }
// console.log(String(data.update[0].updatedAt).slice(10))
  const getxlabel =()=>{
  var val2=[]
   let i=0
   while(i < data.update.length){
     val2[i]=data.update[i].updatedAt ? new Date(data.update[i].updatedAt).toLocaleTimeString() : i //otherwise make it normal
     i++
   }
   return val2
  }
  const getcolor =()=>{
   const status = data.status
    if(status == 'Critical') return 'red'
    if(status == 'Progress') return 'yellow'
    if(status == 'Good') return 'lightgreen'
    if(status == 'Discharged') return 'green'
}
// console.log(String(data.update[1].createdAt).split('T')[0])
  return (
    <Box sx={{ width: '300px', height: 150 }}>
      <LineChart sx={{ margin:0 }}
        series={[
          { data: getvalues(), label: `Patient Data`, yAxisId: 'leftAxisId', color : getcolor(),labelMarkType:"circle"},
          { data: getNormalvalues(), label: 'Normal Data', yAxisId: 'rightAxisId',color:'purple', shape:"circle",labelMarkType:"circle"},
        ]}
        xAxis={[{ scaleType: 'point', data: getxlabel() }]}
        yAxis={[
          { id: 'leftAxisId', width: 50,  },
          { id: 'rightAxisId', position: 'none' },
        ]}
      />
    </Box>
 
  );
}
