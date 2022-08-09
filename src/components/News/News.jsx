import classes from './News.module.css';
import React, {useEffect, useState} from "react";

const News = (props) => {
  const [value, setValue] = useState(0);

   // useEffect(() => {
   //     function Title(props) {
   //         document.previousTitle = document.title;
   //         document.title = `Вы нажали ${value} раз`;
   //     }
   //  return function cleanup() {
   //      document.title = document.previousTitle;
   //      document.previousTitle = undefined;
   //  };
   // }, []);


   return (
        <div>
          <div>
            News
          </div>
          <div>
            <button onClick={() => setValue(value + 1)}>
               Нажми на меня
            </button>
             <p>Вы нажали {value} раз</p>
          </div>
        </div>
    );
}

export default News;