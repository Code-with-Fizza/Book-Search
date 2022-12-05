import {React,useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import b1 from '../images/b1.jpeg'
const Signup = () => {
    
    const paperStyle1 = { padding: '30px 20px', width: 610, marginLeft: "187px",float:"left",marginTop: "0px" }
     const paperStyle2 = { padding: '30px 20px', width: 300, marginLeft: " 840px",marginTop: "120px"  }
     const imageStyle = {  width: 610, height: 366 }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
 const [name, setName] = useState("");
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
 const dispatch = useDispatch();

 const register =()=>{
  dispatch({
    type: 'REGISTER',
    payload:{
        id: (new Date).getTime(),
        name,username, password
    }
  })
 }
    return (
        <Grid  >
             <Paper elevation={5} style={paperStyle1}>
                <img style={imageStyle} src={b1} alt=""/>
             </Paper>
            <Paper elevation={20} style={paperStyle2}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
                    <TextField fullWidth label='Username' value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your username" />
                    <TextField fullWidth label='Password' value={password}  onChange={e => setPassword(e.target.value)} placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' value ={confirmpassword} onChange={e => setConfirmPassword(e.target.value)}placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Link to="/">
                    <Button type='submit' variant='contained' color='primary' onClick={register}>Sign up</Button>

                    </Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;