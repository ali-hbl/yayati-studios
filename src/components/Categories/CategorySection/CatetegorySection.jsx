import { listItems } from '../../../lib/data';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategorySection.scss';

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      {listItems.map((item) => (
        <CategoryCard key={item.title} title={item.title} description={item.description} image={item.img_url} />
      ))}
    </section>
  );
};

export default CategoriesSection;
