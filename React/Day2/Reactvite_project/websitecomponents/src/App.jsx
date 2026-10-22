import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ProductCards from "./components/ProductCards";

const App = () =>{
  return(
    <>
    <Header />
    <Content />
    <Footer />

    <ProductCards 
        name="Laptop"
        price={45000}
        category="Electronics"
        availability="In Stock"
    />

     <ProductCards
        name="T-Shirt"
        price={599}
        category="Fashion"
        availability="In Stock"
      />

       <ProductCards
        name="Headphones"
        price={1499}
        category="Accessories"
        availability="Out of Stock"
      />

    </>
  )
}
export default App