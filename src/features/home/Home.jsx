import { useEffect } from 'react';
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
} from "grommet"

 import '../../assets/css/_home.scss'

export { Home };

function Home() {

    return (
        <Box style={{background:"#fff"}} align="center"  justify="center"  >
      <Text>SELECT THE TYPE OF DATA INGESTION!</Text>
            <Box  align="top" direction="row" justify="center" gap="small" width="800px" height="300px">


                <Card className="bgCard cardWH">
                    <CardBody className="justAlignCent">
                       <Anchor  size="large" label="Sqoop Ingestion" href="/projects-and-pipelines" />

                    </CardBody>
                </Card>
                 <Card width='300px' className="bgCard cardWH">
                    <CardBody  className="justAlignCent" >Batch Ingestion</CardBody>
                </Card>
            </Box>
        </Box>
    );
}
