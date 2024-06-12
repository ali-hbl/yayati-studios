import './CategoryCard.scss';

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="category-card">
      <div className="category-card-inner">
        <div className="category-card-front" style={{ backgroundImage: `url(${image})` }}>
          <h2>{title}</h2>
        </div>
        <div className="category-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
