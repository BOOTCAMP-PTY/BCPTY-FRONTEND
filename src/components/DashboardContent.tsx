import { Button, Card, CardMedia, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Search } from '../utils/const/dashboard'

export default function DashboardContent() {
  return (
    <>
      <Grid xs={12}>
        <Typography variant='h3' color='common.black'>
          Hola, Joe Doe
        </Typography>
      </Grid>

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
        <Grid xs={12} mt={4} sx={{ display: 'flex' }}>
          {[1, 2, 3, 4].map((value, index) => (
            <Card key={index} sx={{ width: '236px', height: '155px', marginRight: '55px' }}>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* Nuevos cursos */}
      <Grid xs={12} mt={'67px'}>
        <Typography variant='h4' color='#3B3B3B'>
          Nuevos cursos
        </Typography>

        {/* Carosuel Component */}
        <Grid item xs={12} mt={4} sx={{ display: 'flex' }}>
          {[1, 2].map((value, index) => (
            <Card key={index} sx={{ width: '527px', height: '262px', marginRight: '55px' }}>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* Los mas vistos */}
      <Grid xs={12} mt={'67px'}>
        <Typography variant='h4' color='#3B3B3B'>
          Los mas vistos
        </Typography>

        {/* Carosuel Component */}
        <Grid item xs={12} mt={4} sx={{ display: 'flex' }}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=''
            containerClass='container-with-dots'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable>
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
            <CardMedia
              component='img'
              alt='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
              image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            />
          </Carousel>
        </Grid>
      </Grid>
    </>
  )
}
