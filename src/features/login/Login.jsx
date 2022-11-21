import { useEffect } from 'react';
import { Box, Card, CardBody, CardHeader , CardFooter, Image, Text, TextInput, Form, Button } from "grommet"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/_index.scss'
import Logo from '../../assets/images/logo.jpg'

export { Login };

function Login() {

    const navigate = useNavigate();
    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;


    function onSubmit({ username, password }) {
        navigate('/home');
    }

    return (
        <Box direction="row"  pad="medium"
 className="item-wrapper">

            <Card  height="medium" width="medium" pad="medium" background="light-1">
                <CardHeader pad="medium">
                <Image src={Logo} width="200"/>
                <Text>Login</Text>

                </CardHeader>
                <CardBody className="card-body">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <TextInput name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <TextInput name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <Box justify="center" align="center" height="90px" width="340px">
                            <Button type="submit" label="Login" disabled={isSubmitting} justify="center" align="center" pad="medium" gap="medium">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            </Button>
                        </Box>

                    </Form>
                </CardBody>
                 <CardFooter className="alert alert-in">
                Username: john<br />
                Password: test
            </CardFooter>
            </Card>
        </Box>
    )
}
