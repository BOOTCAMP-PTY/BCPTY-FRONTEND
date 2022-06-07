import React from "react";
import HeaderPage from "../components/headers/HeaderPage";
import {
  TextField,
  Grid,
  Button,
  Typography,
  IconButton,
  CardContent,
  Container,
  InputAdornment,
  Card,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import HttpsIcon from "@mui/icons-material/Https";
export default function Login() {
  // Responsive

  const botonSesion = {
    width: 358,
    height: 51,
    borderRadius: 15,
    "@media (max-width: 600px)": {
      width: 245,
      height: 35,
      borderRadius: 15,
    },
  };

  return (
    <>
      <HeaderPage />
      <Container
        style={{
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          height: "90%",
        }}
      >
        <Card
          sx={{
            width: "100%",
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            Width: 624,
            borderRadius: 15,
            border: 1,
            height: 797,
          }}
        >
          <CardContent
            sx={{
              width: "100%",
              justifyContent: "center",
              alignSelf: "center",
              display: "flex",
              Width: 495,
              height: 722,
            }}
          >
            <Grid container>
              {/* Titulo */}
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h1" color="initial">
                  Iniciar Sesion
                </Typography>
              </Grid>

              {/* Campos de formulario */}
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                    placeholder="Correo"
                    InputProps={{
                      style: {
                        borderRadius: 15,
                        height: 61,
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: "100%", height: "auto" }}
                    placeholder="Contaseña"
                    InputProps={{
                      style: {
                        borderRadius: 15,
                        height: 61,
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpsIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* Boton */}
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" sx={botonSesion}>
                  Iniciar Sesion
                </Button>
              </Grid>

              {/* Letras pequeñas */}
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Typography variant="subtitle1" color="initial">
                  O iniciar sesion con
                </Typography>
              </Grid>

              {/* Iconos */}
              <Grid container rowSpacing={1} justifyContent="space-evenly">
                {/* Google */}
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <IconButton
                      align
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{
                        width: 80,
                        height: 80,
                      }}
                    >
                      <GoogleIcon
                        style={{
                          width: 66,
                          height: 66,
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="initial">
                      Google
                    </Typography>
                  </Grid>
                </Grid>

                {/* GitHub */}
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <IconButton
                      align
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{
                        width: 80,
                        height: 80,
                      }}
                    >
                      <GitHubIcon
                        style={{
                          width: 66,
                          height: 66,
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="initial">
                      GitHub
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
