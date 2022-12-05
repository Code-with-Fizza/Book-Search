import React , {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import b1 from '../images/b1.jpeg'
import { useNavigate } from 'react-router-dom';

const Login=()=>{
      const paperStyle1 = { padding: '30px 20px', width: 610, marginLeft: "187px",float:"left",marginTop: "0px" }
     const paperStyle2 = { padding: '30px 20px', width: 300, height: 420, marginLeft: " 840px",marginTop: "120px"  }
    // const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
      const imageStyle = {  width: 610, height: 366 }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users= useSelector(state => state.users);
  const dispatch = useDispatch();
  	const navigate = useNavigate();
    const loginuser = ()=> {
  const payload = users.find(user => user.username === username && user.password === password)
  if(payload){
     dispatch({
        type: 'LOGIN',
        payload
     })
     alert('Successfully Logged In!')
     navigate("/dashboard")
  }else{
    alert('You enter wrong Cerdential!')
  }
    }
    return(
        <Grid>
            <Paper elevation={5} style={paperStyle1}>
                <img style={imageStyle} src={b1} alt=""/>
             </Paper>
            <Paper elevation={10} style={paperStyle2}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='Password'  value={password}  onChange={e => setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary'  onClick ={loginuser} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login