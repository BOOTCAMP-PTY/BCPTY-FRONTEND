import { Grid } from '@mui/material'
import HeaderPage from '../headers/HeaderPage'
import HomeCourse from './HomeCourse'

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ m: 0, p: 0 }}>
        <HeaderPage />
      </Grid>
      <Grid item xs={12}>
        <HomeCourse />
      </Grid>
    </Grid>
  )
}
