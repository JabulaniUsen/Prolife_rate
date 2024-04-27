import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
 {
    name: 'Jan',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Feb',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Mar',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Apr',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'May',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Jun',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Jul',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Aug',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Sep',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Oct',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Nov',
    value1: 0,
    value2: 0,
    value3: 0,
 },
 {
    name: 'Dec',
    value1: 0,
    value2: 0,
    value3: 0,
 },
];

const StackedBarChart = () => (
 <BarChart
    width={600}
    height={350}
    data={data}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
 >
    <CartesianGrid strokeDashoffset="3 3"  />
    {/* <XAxis dataKey="name" /> */}
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value3" stackId="a" fill="#0ba5ec" />
    <Bar dataKey="value2" stackId="a" fill="#2b99c8" />
    <Bar dataKey="value1" stackId="a" fill="#7cd4fd" />
 </BarChart>
);

export default StackedBarChart;