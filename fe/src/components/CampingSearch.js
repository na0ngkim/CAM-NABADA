import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function CampingSearch(props) {
  const [campings, setCampings] = React.useState([]);
  let campingList = [];

<<<<<<< HEAD
  const getCampings = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8092/camp/basic/list`
      )
    ).json();
    console.log(json)
    setCampings(json);
  };

  for (let i=0; i < campings.length; i++){
    campingList.push(campings[i].facltNm);
=======
  function checkOnlyOneCamp(e) {
    const content = e.target;
    props.func(content.innerText);
>>>>>>> 7419366ac88bc25affae4c6a669b6f0b88624915
  }
  
  React.useEffect(() => {
    getCampings()
  }, []);

  const getCampings = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8092/camp/basic/list`
      )
    ).json();
    setCampings(json); 
  };

  for (let i = 0; i < campings.length; i++){
    const campData = {
      "id": campings[i].campId,
      "name": campings[i].facltNm
    };
    campingList.push(campData);
  }


  return (
    <Stack spacing={2} sx={{ width: 500, mt: 2 }}>
      <Autocomplete
        freeSolo
        id="free-solo"
        disableClearable
        onChange={checkOnlyOneCamp}
        options={campingList.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="캠핑 찾기"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}
