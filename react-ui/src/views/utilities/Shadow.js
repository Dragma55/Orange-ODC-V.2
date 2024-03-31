import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@material-ui/styles';
import { Box, Card} from '@material-ui/core';
import MainCard from './../../ui-component/cards/MainCard';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const ShadowBox = ({ shadow }) => {
    const theme = useTheme();
    return (
        <Card sx={{ mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};


const UtilitiesShadow = () => {

    return (
        <MainCard>
                
                            <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
         
            
        </MainCard>
    );

};



export default UtilitiesShadow;