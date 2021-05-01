import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import Rows from './components/Rows';

function App() {
  return (
    <div className="app">
        {/* Header */}
        <Header />

        {/* Home Page */}
        <Home />

        {/* Rows with Products */}
        <Rows />

        {/* item  */}
        <Item 
         src='https://www.aesop.com/u1nb1km7t5q7/73c4JT56oX3r1xn2UVqAzd/41db81db3809032ac0ab82b9d6cdc3d1/Aesop_Skin_Care_Plus_2021_Web_Range_Page_Secondary_Mid_GL_Desktop_2560x1440px.jpg'
         h3='Knowledge is power'
         h2='Aesop on Vitamins'
         p='
         The science behind some of the ingredients we return to time and again for their unique characteristics—be they soothing, calming, balancing, nourishing or anti-oxidant.'
         button='Discover Vitamins'         
        />
        {/*  Rows with Products */}

        {/* item  */}

        {/* item inverted */}

        {/* footer */}
    </div>
  );
}

export default App;
