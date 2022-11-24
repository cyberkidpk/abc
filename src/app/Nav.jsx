import { NavLink } from 'react-router-dom';
import { Header, Text, Image, Button, Box, Anchor } from "grommet"

//import HeaderBg  from '../assets/images/header.png' backgroundImage:`url(${HeaderBg})`

export { Nav };

function Nav() {

    return (
     <Header
     className="header"
          style={{ justifyContent:'right', height:'120px', position:'left top', backgroundRepeat:'no-repeat', backgroundSize: '100% 90px'}}
          sticky="scrollup"
          pad={{ vertical: 'small' }}
        >
        <nav className="navbar navbar-expand navbar-dark bg-dark" >
            <Box pad='medium' style={{justifyContent:'center', flexDirection:'row'}}>
                    <Anchor  label="Home" href="/" />
                   <Text color="#efefef" padding="large"> |</Text>
                   <Anchor color="#efefef"  label="Projects and Pipelines" href="/projects-and-pipelines" />
                    <Text color="#efefef" padding="large"> |</Text>
                    <Anchor color="#efefef"  label="View Status and Details" href="/view-status-and-details" />
                   <Text color="#efefef" padding="large"> |</Text>
                <Box width='100px' height="40px" >
                    <Button  color="blue" primary pad='medium'>Logout</Button>
                </Box>
            </Box>
        </nav>
        </Header>
    );
}