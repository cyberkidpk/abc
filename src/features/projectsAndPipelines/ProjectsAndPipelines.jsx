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
export { ProjectsAndPipelines };

function ProjectsAndPipelines() {
const [expandedGroups, setExpandedGroups] = useState([DATA[2].project]);

    return (
        <Box style={{background:"#fff"}} align="center"  justify="center"  >
        <Text>PROJECTS AND PIPELINES</Text>

            <Box  align="top" direction="row" justify="center" gap="small" width="1300px">


<DataTable
     columns={groupColumns}
      data={DATA}
      primaryKey={false}
      groupBy={{
        property: 'project',
        expand: expandedGroups,
        onExpand: setExpandedGroups,
      }}
      sortable
    />
            </Box>
        </Box>
    );
}
