import { Fragment } from 'react';
import { listItems } from '../../../lib/data';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories-container">
      <ul>
        {listItems.map((item, index) => (
          <Fragment key={index}>
            <li>{item.title}</li>
            <p>{item.description}</p>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
