import MainCard from './../../ui-component/cards/MainCard';
import { useCallback } from 'react';
import React, { useRef } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';


const surveyJson = {
    
        "title": "FeedBack Survey",
        "description": "Your opinion matters! ",
        "logoPosition": "right",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question2",
            "title": " Please input your name "
           },
           {
            "type": "text",
            "name": "question3",
            "title": " Please input your email"
           },
           {
            "type": "rating",
            "name": "question1",
            "title": "Overall How much are you satisfied with the learning journey? "
           },
           {
            "type": "rating",
            "name": "question4",
            "title": "Please rate the ressources effieciency regarding the training "
           },
           {
            "type": "text",
            "name": "question5",
            "title": "Do you have any additional comments or suggestions for improvement?"
           },
           {
            "type": "radiogroup",
            "name": "question6",
            "title": " Select the name of your expert",
            "choices": [
             "Ahmed",
             "Rihem",
             "Khalil",
             "Mohamed"
            ]
           }
          ]
         }
        ]
       
  };


  function TablerIcons() {
    const survey = new Model(surveyJson);
    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);

    }, []);
  
    survey.onComplete.add(alertResults);
  
    return (
        <MainCard>
           <Survey model={survey} />;
        </MainCard>
    );
  }


export default TablerIcons;
