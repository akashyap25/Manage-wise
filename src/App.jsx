import {Hero, Footer, CustomerReviews, PopularProducts,Feature ,FAQ, Pricing,Join} from './sections';
import Navbar from './Components/Navbar';
const App = () =>(
   <main className="relative">
      <Navbar/>
     <section >
     <Hero/>
     </section>
     <section >
      <PopularProducts/>
     </section>
     <section>
      <Feature/>
     </section>
     <section>
      <FAQ/>
     </section>
     <section>
      <Pricing/>
     </section>
     <section >
      <CustomerReviews/>
     </section>
     <section >
      <Join/>
     </section>
     <section >
      <Footer/>
     </section>
   </main>
)

export default App;