import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const patientData = [400, 300, 7000, 780, 890, 290, 490];
const NormalData = [500,500,500,500,500,500,500];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BiaxialLineChart() {
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <LineChart
        series={[
          { data: patientData, label: 'Patient Data', yAxisId: 'leftAxisId' },
          { data: NormalData, label: 'Normal Data', yAxisId: 'rightAxisId' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          { id: 'leftAxisId', width: 50 },
          { id: 'rightAxisId', position: 'right' },
        ]}
      />
    </Box>
  );
}
