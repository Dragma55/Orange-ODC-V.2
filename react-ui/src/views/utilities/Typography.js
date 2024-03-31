import React from 'react';
import { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
  } from '@mui/material';

import MainCard from './../../ui-component/cards/MainCard';


const levels = [
    {
      value: '1',
      label: 'Niveau débutant'
    },
    {
      value: '2',
      label: 'Niveau intermédiaire'
    },
    {
      value: '3',
      label: 'Niveau avancé'
    },
  ];
  
  const hours = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    },
    {
      value: '4',
      label: '4'
    },
    {
      value: '5',
      label: '5'
    },
    {
      value: '6',
      label: '6'
    },
    {
      value: '7',
      label: '7'
    },
    {
      value: '8',
      label: '8'
    },
    {
      value: '9',
      label: '9'
    },
    {
      value: '10',
      label: '10'
    },
  ];
  

const Typography = () => {

    const [values, setValues] = useState({
        title: '',
        desc: '',
        total: ' ',
        level: ' '
      });
    
      const handleChange2 = (event) => {
        const { name, value } = event.target;
        setValues((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleSubmit = useCallback(
        (event) => {
          event.preventDefault();
        },
        []
      ); 

    return (
        <MainCard title="Créer une formation">
                <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Spécifier le titre de la formation"
                  label="Titre de la formation"
                  name="title"
                  onChange={handleChange2}
                  required
                  value={values.title}
                />
              </Grid>

              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={1} 
                  helperText="Écriver une brève description de la formation"
                  label="Description de la formation"
                  name="desc"
                  onChange={handleChange2}
                  required
                  value={values.desc}
                />
              </Grid>

              <Grid
                xs={12}
                md={6}
               >
                <TextField
                  fullWidth
                  helperText="Définisser le nombre total d'heures des sessions de formation"
                  label="Heures totales"
                  name="total"
                  onChange={handleChange2}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.total}
                >
                  {hours.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid
                xs={12}
                md={6}
               >
                <TextField
                  fullWidth
                  helperText="Attribuer un niveau à la formation"
                  label="Niveau"
                  name="level"
                  onChange={handleChange2}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.level}
                >
                  {levels.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

          </Grid>
          </Box>  
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
           Créer une formation
          </Button>
        </CardActions>
      </Card>
    </form>
        </MainCard>
    );
};

export default Typography;
