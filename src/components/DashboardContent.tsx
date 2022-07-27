import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Search } from '../utils/const/dashboard'
import Carrusel from './Carousel/Carrusel'
import { LargeCard, MediumCard, SmallCard } from './Carousel/CarruselCards'
import { continuarViendo, loMasVisto, nuevosCursos } from './Carousel/responsive'

export default function DashboardContent() {
  return (
    <>
      <Typography variant='h3' color='common.black'>
        Hola, Joe Doe
      </Typography>

      <Grid container alignItems={'flex-end'} xs={12} mt={'77px'}>
        <Grid item xs={12} sm={7} lg={9}>
          <Typography variant='h4'>Busca algun tema de interes</Typography>
          <TextField
            placeholder='ej. frontend'
            sx={{ width: '100%', border: 'none', mt: '14px' }}
            InputProps={{
              sx: {
                height: '55px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              },
              endAdornment: (
                <InputAdornment position='end'>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid
          container
          justifyContent={'center'}
          item
          xs={12}
          sm={5}
          lg={3}
          sx={{ mt: { xs: '2rem', sm: 0 } }}>
          <Button variant='contained' sx={{ width: '228px', height: '55px' }}>
            <Typography
              variant='h5'
              color='#636363'
              sx={{
                width: '98px',
                height: '31px',
              }}>
              Buscar
            </Typography>
          </Button>
        </Grid>
      </Grid>

      {/* Continuar Viendo */}
      <Grid xs={12} mt={'67px'}>
        <Typography variant='h4' color='#3B3B3B'>
          Continuar Viendo
        </Typography>
        {/* Carosuel Component */}
        <Grid item xs={12} mt={4} sx={{ width: '100%', height: 'auto' }}>
          <Carrusel responsive={continuarViendo} clase={'continuar-viendo'}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <SmallCard
                key={index}
                img={
                  'https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/the-benefits-of-reactjs-main.jpg'
                }
              />
            ))}
          </Carrusel>
        </Grid>
      </Grid>

      {/* Nuevos cursos */}
      <Grid xs={12} mt={'67px'}>
        <Typography variant='h4' color='#3B3B3B'>
          Nuevos cursos
        </Typography>

        {/* Carosuel Component */}
        <Grid item xs={12} mt={4} sx={{ width: '100%', height: 'auto' }}>
          <Carrusel responsive={nuevosCursos} clase={'nuevos-cursos'}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <LargeCard
                key={index}
                img={
                  'https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/the-benefits-of-reactjs-main.jpg'
                }
              />
            ))}
          </Carrusel>
        </Grid>
      </Grid>

      {/* Los mas vistos */}
      <Grid xs={12} mt={'67px'}>
        <Typography variant='h4' color='#3B3B3B'>
          Los mas vistos
        </Typography>

        {/* Carosuel Component */}
        <Grid item xs={12} mt={4} sx={{ width: '100%', height: 'auto' }}>
          <Carrusel responsive={loMasVisto} clase={'los-mas-vistos'}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <MediumCard
                key={index}
                img={
                  'https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/the-benefits-of-reactjs-main.jpg'
                }
              />
            ))}
          </Carrusel>
        </Grid>
      </Grid>
    </>
  )
}
