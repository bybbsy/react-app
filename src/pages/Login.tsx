import { Box, TextField } from "@mui/material";

export function LoginPage() {
  return (
    <div className="">
       <Box sx={{display: 'flex', py: 2}}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Surname" variant="outlined" />
       </Box>
    </div>
  )
}
