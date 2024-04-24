import { Stack, Typography,TextField, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

function SignInForm(props) {
    const {onSwitchMode,ScreenMode}=props;
    return (
<Stack justifyContent="center"
alignItems="center"
sx={{
    height:"100%",
    width:"100%",
    maxWidth:"700px",
    color:"grey",

}}
>
    <Stack spacing={5} sx={{width:'400px'}}>
        <Stack>
            <Typography variant='h4' fontWeight={600} color="grey">WELCOME</Typography>
            <Typography>Please login to your account</Typography>
        </Stack>
        <Stack spacing={4}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography>Email</Typography>
                </Stack>
                <TextField type='email'/>
                <Stack spacing={1}>
                    <Typography>password</Typography>
                </Stack>
                <TextField type='password' />
            </Stack>
<Button variant='contained' size='large' sx={{
    bgcolor:'grey'
}}>SignIn</Button>
<Stack direction='row' spacing={2}>
<Typography >Don't have an account</Typography>

<Typography onClick={()=>onSwitchMode(ScreenMode.SIGN_UP)} sx={{cursor:'pointer'}}>SignUp</Typography>
</Stack>
        </Stack>
    </Stack>

</Stack>
    );
}

export default SignInForm;