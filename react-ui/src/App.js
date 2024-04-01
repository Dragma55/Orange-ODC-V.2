import React from 'react';
import { useSelector } from 'react-redux';
import "survey-core/defaultV2.css";
import { Model } from "survey-core"; 
import { Survey } from "survey-react-ui";

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';

//-----------------------|| APP ||-----------------------//
const json=[{}
    "title": "FeedBack Survey",
    "description": "Your opinion matters! ",
    "logo": "data:image/jpeg;base64,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",
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
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       }
      ]
     }
    ]
   }]
const App = () => {
    const customization = useSelector((state) => state.customization);
    const model = new Model(json); 
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
            <Survey model={model} ></Survey>
        </StyledEngineProvider>
    );
    
};

export default App;
