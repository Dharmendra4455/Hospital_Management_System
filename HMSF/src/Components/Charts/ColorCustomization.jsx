import * as React from 'react';
import Stack from '@mui/material/Stack';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const settings = {
  height: 100,
  yAxis: { min: 0, max: 20 },
};

const values = [5,1,4,5,6,3,8,3,9,3,2,8,9,8,7,6,5];

export default function ColorCustomization() {
  return (
    <Stack sx={{ width: '100%', maxWidth: 300 }}>
     
      <SparkLineChart data={values} color="green" {...settings} />
    </Stack>
  );
}
