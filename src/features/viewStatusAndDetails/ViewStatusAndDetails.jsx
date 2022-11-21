import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box,
Card,
CardBody,
CardHeader,
CardFooter,
Image,
Text,
TextInput,
Form,
Button,
Anchor,
 Spinner,
 DataTable
} from "grommet"

 import '../../assets/css/_home.scss'

import { columns, DATA } from '../../assets/data';

const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;
export { ViewStatusAndDetails };

function ViewStatusAndDetails() {
const [expandedGroups, setExpandedGroups] = useState([DATA[2].project]);

    return (
        <Box style={{background:"#fff"}} align="center"  justify="center"  >
        <h1> No Status! please first select your desired project and  pipeline <Anchor primary  label="Click Here" href="/projects-and-pipelines" /></h1>
        <Text pad="small">STATUSES AND DETAILS</Text>

            <Box  align="top" direction="row" justify="center" gap="small" width="1300px" className="flex-wrap">

   <Card pad="small" background="green" gap="medium" className="status-card">
      <CardHeader>Request Status</CardHeader>
      <CardBody><strong> No Status </strong></CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
    {/* internal components are optional  */}
    <Card pad="small" gap="medium" background="light-4" className="status-card">
      <CardBody><strong> No Status </strong></CardBody>
      <Box>box - random component</Box>
    </Card>
    {/* internal components order is flexible  */}
<Card pad="small" gap="medium" background="light-1" className="status-card" >
<CardHeader>header</CardHeader>
       <CardBody><strong> No Status </strong></CardBody>

      <CardFooter>footer</CardFooter>
    </Card>
    {/* children that are not Card internal components */}
    <Card pad="small" gap="medium" background="light-1" className="status-card">
     <CardHeader>header</CardHeader>
       <CardBody><strong> No Status </strong></CardBody>

      <CardFooter>footer</CardFooter>
    </Card>

            </Box>
        </Box>
    );
}
