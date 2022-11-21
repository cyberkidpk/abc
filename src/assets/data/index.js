import React from 'react';

import { Box, Meter, Text, Tip, Button, Anchor } from 'grommet';

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const columns = [
  {
    property: 'name',
    header: <Text>Name with extra</Text>,
    primary: true,
//    footer: 'Total',
  },
  {
    property: 'project',
    header: 'Projects',
  },
  {
    property: 'date',
    header: 'Date',
    render: (datum) =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'requeststatus',
    header: 'Approval Status (hover on status)',
    render: (datum) => {return  datum.requeststatus === 'Not Started' ?
        <Anchor type="button" disabled title="Add Parameters to pipeline and start the process" size="small" label="Not Started" primary color="red" href="/view-status-and-details" />
        :
        datum.percent ?
        <Anchor type="button" size="small"  title="Request is approved, check detailed status" label="Approved" primary color="green" href="/view-status-and-details" />
        : ""
    }
    },
  {
    property: 'percent',
    header: 'Pipeline Status',
    render: ({ percent }) => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter values={[{ value: percent }]} thickness="small" size="small" />
      </Box>
    ),
  },
  {
    property: 'addparameters',
    header: 'Add Sqoop Parameters',
    render: (datum) => { console.log(datum.percent); return  datum.percent === 0 ?
        <Anchor type="button" size="small" label="Add Parameters" primary href="/sqoop" /> :
        datum.percent ?
        <Anchor type="button" size="small" color="blue" label="View Detailed Status" primary href="/view-status-and-details" />
        :
        "";
    },

  },
];

export const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
//groupColumns[0].footer = groupColumns[1].footer;
//delete groupColumns[0].footer;


export const projects = [
  'CDL2.0 Silver',
  'CDL2.0 Gold',
];

export const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    name: `Name ${i + 1}`,
    project: projects[i % projects.length],
    date: `2018-07-${(i % 30) + 1}`,
    percent: (i % 11) * 10,
    addparameters: ((i + 1) * 17) % 1000,
  });
}

export const DATA = [
  {
    name: 'Alan',
    project: 'CDL2.0 Gold',
    date: '',
    percent: 0,
    requeststatus:'Not Started',
    addparameters: 0,
  },
  {
    name: 'Bryan',
    project: 'CDL2.0 Silver',
    date: '2018-06-10',
    percent: 30,
    requeststatus:'Approved',
    addparameters: 1234,
  },
  {
    name: 'Chris',
    project: 'CDL2.0 Silver',
    date: '2018-06-09',
    percent: 40,
        requeststatus:'Approved',
    addparameters: 2345,
  },
  {
    name: 'Eric',
    project: 'CDL2.0 Gold',
    date: '2018-06-11',
    percent: 80,
        requeststatus:'Approved',
    addparameters: 3456,
  },
  {
    name: 'Doug',
    project: 'CDL2.0 Silver',
    date: '2018-06-10',
    percent: 60,
        requeststatus:'Approved',
    addparameters: 1234,
  },
  {
    name: 'Jet',
    project: 'CDL2.0 Gold',
    date: '2018-06-09',
    percent: 40,
        requeststatus:'Approved',
    addparameters: 3456,
  },
  {
    name: 'Michael',
    project: 'CDL2.0 Gold',
    date: '2018-06-11',
    percent: 50,
        requeststatus:'Approved',
    addparameters: 1234,
  },
  {
    name: 'Tracy',
    project: 'CDL2.0 Silver',
    date: '2018-06-10',
    percent: 10,
        requeststatus:'Approved',
    addparameters: 2345,
  },
];
