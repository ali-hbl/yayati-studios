import { listItems } from '../../../lib/data';
import './Categories.scss';

const Categories = () => {
  return (
    <div>
      <ul className="hero-list">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
