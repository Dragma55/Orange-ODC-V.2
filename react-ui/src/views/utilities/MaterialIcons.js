import MainCard from './../../ui-component/cards/MainCard';
import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';


function MaterialIcons() {

  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady = (unlayer) => {}

  return (
    <MainCard>
     <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
      </MainCard>
  );
}


export default MaterialIcons;
