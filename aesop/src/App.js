import './App.css';
import Footer from './components/Footer';
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
        <Rows />

        {/* item  */}
        <Item 
         src='https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg'
         h3='Vitamin C for day and night'
         h2='Supporting the architecture of the skin'
         p='Vitamin C is essential for enhancing the skin’s resilience. Suited to use both morning and evening, this potent ingredient offers significant benefits when paired with time and dedication.'
         button='Discover More about Vitamin C'         
        />
        {/* item inverted */}
        <Item 
         src='https://www.aesop.com/u1nb1km7t5q7/73c4JT56oX3r1xn2UVqAzd/41db81db3809032ac0ab82b9d6cdc3d1/Aesop_Skin_Care_Plus_2021_Web_Range_Page_Secondary_Mid_GL_Desktop_2560x1440px.jpg'
         h3='Facial Appointments'
         h2='Composure for the skin and senses'
         p='For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin'
         button='Learn More'         
        />
        {/* footer */}
        <Footer />
    </div>
  );
}

export default App;
