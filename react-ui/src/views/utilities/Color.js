import React from 'react';
import MainCard from './../../ui-component/cards/MainCard';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ExcelExport } from '@syncfusion/ej2-react-schedule';
import { useRef } from 'react';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekxxWmFZfVpgdVVMZVhbQH5PMyBoS35RckVgWn5fcHFRQmhVVEdz");


const UIColor = () => {

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
        if (!args.element.querySelector('.custom-field-row')) {
            let row = createElement('div', { className: 'custom-field-row' });
            let formElement = args.element.querySelector('.e-schedule-form');
            formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
            let container = createElement('div', { className: 'custom-field-container' });
            let inputEle = createElement('input', {
                className: 'e-field', attrs: { name: 'EventType' }
            });
            container.appendChild(inputEle);
            row.appendChild(container);
            let drowDownList = new DropDownList({
                dataSource: [
                    { text: 'Python', value: 'public-event' },
                    { text: 'CSS', value: 'maintenance' },
                    { text: 'Angular', value: 'commercial-event' },
                    { text: 'HTML', value: 'family-event' }
                ],
                fields: { text: 'text', value: 'value' },
                value: args.data.EventType,
                floatLabelType: 'Always', placeholder: 'Assign Training'
            });
            drowDownList.appendTo(inputEle);
            inputEle.setAttribute('name', 'EventType');
        }
    }
   }  

   const scheduleObj = useRef(null);
   const onExportClick = () => {scheduleObj.current.exportToExcel();}
   const onActionBegin = (args) => {
    if (args.requestType === 'toolbarItemRendering') {
        let exportItem = {
            align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
            text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
        };
        args.items.push(exportItem);
    }
}
    return (
        <MainCard>
           <ScheduleComponent ref={scheduleObj} actionBegin={onActionBegin} popupOpen={onPopupOpen}>

             <Inject services={[Day, Week, WorkWeek, Month, Agenda, ExcelExport]}/>
           </ScheduleComponent>           
        </MainCard>
    );

};

export default UIColor;