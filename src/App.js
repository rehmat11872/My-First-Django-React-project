import  { Container } from 'react-bootstrap'
import * as React from 'react';
import Headers from "./components/Headers";
import Footer from "./components/Footer";

import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div>
     <Headers />

     <main className="py-3">
      <Container>
       <HomeScreen />
      </Container>
     </main>

     <Footer />
    </div>
  );
}

export default App;
