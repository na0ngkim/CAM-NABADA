import * as React from 'react';
import NavBar from '../components/NavBar'
import SelectVariantsBoard from '../components/SelectVariantsBoard';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import BoardTable from '../components/BoardTable';

function Community() {
  return (
    <div>
      <NavBar />    
      <Grid container sx={{ height : '100vh', m: 4}}>
        <CssBaseline />
        <Grid item xs={12} align="center">
          <Container sx={{mt : 10, mb : 2}}>
            <img src="img/camping.jpg" sx={{ mt: 20 }} alt="camping"/>
          </Container>
          <div>
            <Typography component="h1" variant="h4" align="center" sx={{m: 2}}> 
              CAM:NABADA 커뮤니티
            </Typography>
            <Link to={'/create'} underline="none">
              <Button variant="contained">게시글 작성</Button>
            </Link>
          </div>
          <SelectVariantsBoard />
        </Grid>
      <BoardTable />  
      </Grid>
    </div>
  )
}

export default Community;