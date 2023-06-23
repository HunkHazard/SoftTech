import {Typography,Button,Stack} from '@mui/material'
import { signIn, useSession ,signOut} from 'next-auth/react'
import { useRouter } from 'next/router';

export default function Home() {
  const {data:session}=useSession();
  const {push,asPath}=useRouter();
  const router = useRouter();
  const { session: sessionParam } = router.query;
  const emailParam = router.query.email;
  const handleSignOut = () => {
    if (session) {
      signOut({ redirect: false });
    } else if (sessionParam === 'true') {
      router.push('/');
    }
  };
  const handleSignIn=()=>{
    push(`/auth/signin?callbackUrl=${asPath}`);
  }
  const handleSignUp=()=>{
    push(`/auth/signup?callbackUrl=${asPath}`);
  }
  return (
    <>
    { session || sessionParam==='true'?
      <Stack id='testing' sx={{
        width: '98vw',
        height: '97vh',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
      }}>
        <Typography variant='h3' sx={{marginBottom:'5px'}}>Signed In as {session ? session.user.email : emailParam}</Typography> 
        <Button variant='contained' size='medium' onClick={handleSignOut} color="error" sx={{marginTop:'5px'}}>Sign Out</Button>
      </Stack>
      : 
      <Stack sx={{
        width: '98vw',
        height: '97vh',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column',
      }}>
        <Stack>
        <Typography variant='h3' sx={{marginBottom:'5px',display:'block'}}>WELCOME TO SMARTAGRITECH SOLUTIONS</Typography>
        </Stack>
        <Stack sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
        }}>
        <Button variant='contained' size='medium' onClick={handleSignIn} sx={{marginTop:'5px',marginRight:'5px'}}>LogIn</Button>
        <Typography variant='body1' sx={{marginBottom:'0px',display:'inline'}}>OR</Typography>
        <Button variant='contained' size='medium' onClick={handleSignUp} sx={{marginTop:'5px', width:'79px',marginLeft:'5px'}}>SignUp</Button>
        </Stack>
      </Stack>
    }
    </>
  )
}
