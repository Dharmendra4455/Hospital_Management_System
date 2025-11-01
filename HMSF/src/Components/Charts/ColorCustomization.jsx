import * as React from 'react';
import Stack from '@mui/material/Stack';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const settings = {
  height: 100,
  yAxis: { min: 0, max: 20 },
};

// const values = [5,1,4,5,6,3,8,3,9,3,2,8,9,8,7,6,5];

export default function ColorCustomization(
{data}
) {
const getvalues =()=>{
  var val=[]
   let i=0
   while(i < data.update.length){
     val[i]=Number(data.update[i].healthrate)*2 || 0
     i++
   }
   return val
  }

const getcolor =()=>{
   const status = data.status
    if(status == 'Critical') return 'red'
    if(status == 'Progress') return 'yellow'
    if(status == 'Good') return 'lightgreen'
    if(status == 'Discharged') return 'green'
}
  console.log(data)
  return (
    <Stack sx={{ width: '100%', maxWidth:300 }}>   
      <SparkLineChart data={getvalues()} color={getcolor} {...settings} />
    </Stack>
  );
}
