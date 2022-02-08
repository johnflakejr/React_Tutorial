import React, {useState} from 'react';
import colorData from './color-data.json';
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
import { v4 } from 'uuid';

export default function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm 
        onNewColor={(title,color) => {
          const id =  v4();
          const rating = 0;
          const newColors = [...colors,{title, color, rating, id}];

          console.log(newColors);
          console.log(...newColors);
          setColors(newColors);
        }}
      />
      <ColorList 
      colors={colors}
      onRateColor = {(id, rating) => {
        const newColors = colors.map(color => {
          if (color.id === id) { 
            return {...color, rating};
          } else {
            return color;
          }
        });

        setColors(newColors);
      }}
      onRemoveColor = {id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
      />
    </>
  );
}