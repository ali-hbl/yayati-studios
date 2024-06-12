import './App.scss';
// import Categories from './components/Categories/Categories';
import CategoriesSection from './components/Categories/CategorySection/CatetegorySection';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';

/* TODO: 
  - Responsive au plus vite
  - REACT-ROUTER-DOM pour les différentes pages + leur contenu
  - React i18n pour la traduction
  - Formulaire de contact
*/

function App() {
  return (
    <main>
      <Hero />
      <Intro />
      {/* <Categories /> */}
      <CategoriesSection />
      <footer>
        <p>&copy; 2024 HABOULA Ali</p>
      </footer>
    </main>
  );
}

export default App;
