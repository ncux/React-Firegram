import React from 'react';
import Title from './components/Title';
import { UploadImage } from "./components/upload-image/upload-image";
import { Images } from "./components/images/images";

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadImage />
      <Images />
    </div>
  );
}

export default App;
