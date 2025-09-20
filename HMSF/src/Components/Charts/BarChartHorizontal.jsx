import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useAnimate, useAnimateBar, useDrawingArea } from '@mui/x-charts/hooks';
import { PiecewiseColorLegend } from '@mui/x-charts/ChartsLegend';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';
import Box from '@mui/material/Box';

const data =[
  {
    "Department": "Dept1",
    "Time": 35
  },
  {
    "Department": "Dept2",
    "Time": 25
  },
  {
    "Department": "Dept3",
    "Time": 15
  },
  {
    "Department": "Dept4",
    "Time": 35
  },
  {
    "Department": "Dept5",
    "Time": 45
  },
  {
    "Department": "Dept6",
    "Time": 5
  },
  {
    "Department": "Dept7",
    "Time": 75
  },
  {
    "Department": "Dept8",
    "Time": 90
  },
 
]

export default function BarChartHorizontal() {
  return (
    <Box width="100%">
      {/* <Typography marginBottom={3}>
        European countries with lowest & highest voter turnout
      </Typography> */}
      <BarChart
        height={300}
        dataset={data}
        series={[
          {
            id: 'Time',
            dataKey: 'Time',
            stack: 'voter turnout',
            valueFormatter: (value) => `${value}%`,
          },
        ]}
        layout="horizontal"
        xAxis={[
          {
            id: 'color',
            min: 0,
            max: 100,
            colorMap: {
              type: 'piecewise',
              thresholds: [20, 40],
              colors: ['#d32f2f', '#78909c', '#1976d2'],
            },
            valueFormatter: (value) => `${value} min`,
          },
        ]}
        barLabel={(v) => `${v.value} min`}
        yAxis={[
          {
            scaleType: 'band',
            dataKey: 'Department',
            width: 70,
          },
        ]}
        slots={{
          legend: PiecewiseColorLegend,
          barLabel: BarLabelAtBase,
          bar: BarShadedBackground,
        }}
        slotProps={{
          legend: {
            axisDirection: 'x',
            markType: 'square',
            labelPosition: 'inline-start',
            labelFormatter: ({ index }) => {
              if (index === 0) {
                return 'lowest turnout';
              }
              if (index === 1) {
                return 'average';
              }
              return 'highest Time';
            },
          },
        }}
      />
    </Box>
  );
}

export function BarShadedBackground(props) {
  const { ownerState, skipAnimation, id, dataIndex, xOrigin, yOrigin, ...other } =
    props;
  const theme = useTheme();

  const animatedProps = useAnimateBar(props);
  const { width } = useDrawingArea();
  return (
    <React.Fragment>
      <rect
        {...other}
        fill={(theme.vars || theme).palette.text.primary}
        opacity={theme.palette.mode === 'dark' ? 0.05 : 0.1}
        x={other.x}
        width={width}
      />
      <rect
        {...other}
        filter={ownerState.isHighlighted ? 'brightness(120%)' : undefined}
        opacity={ownerState.isFaded ? 0.3 : 1}
        data-highlighted={ownerState.isHighlighted || undefined}
        data-faded={ownerState.isFaded || undefined}
        {...animatedProps}
      />
    </React.Fragment>
  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme).palette.common.white,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'start',
  dominantBaseline: 'central',
  pointerEvents: 'none',
  fontWeight: 600,
}));

function BarLabelAtBase(props) {
  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    classes,
    xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    layout,
    skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: xOrigin + 8, y: y + height / 2 },
    {
      initialProps: { x: xOrigin, y: y + height / 2 },
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());
      },
      skip: skipAnimation,
    },
  );

  return <Text {...otherProps} {...animatedProps} />;
}
