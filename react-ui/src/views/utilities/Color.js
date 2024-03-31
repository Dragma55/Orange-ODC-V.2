import React from 'react';
import MainCard from './../../ui-component/cards/MainCard';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxxWmFZfVpgdVVMZVhbQH5PMyBoS35RckVgWn5fcHFRQmhVVEdz");


const UIColor = () => {

    return (
        <MainCard>
           <ScheduleComponent>
             <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
           </ScheduleComponent>           
        </MainCard>
    );

};


export default UIColor;