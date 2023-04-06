import { Typography } from '@mui/material';





import {useState,useEffect} from 'react';
import axios from 'axios';
import{CircularProgram,Box} from '@mui/material';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
return(
        <>
<Typography>Name: ITHA AKHIL</Typography>
<Typography>Father Name: I.RAMESH</Typography>
<Typography>Mother Name: I.ROJA</Typography>
<Typography>Email: ithaakhil3@gmail.com@gmail.com</Typography>
<Typography>Phone No.: 8121349030</Typography>
        </>
        
    )
    }