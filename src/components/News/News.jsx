import classes from './News.module.css';
import React, {useState} from "react";

const News = (props) => {
  const [value, valueChange] = useState(0);
    return (
        <div>
          <div>
            News
          </div>
          <div>
            {value}
            <button onClick={() => valueChange(value + 1)}>
              Увеличить значение на 1
            </button>
          </div>
        </div>
    );
}

export default News;