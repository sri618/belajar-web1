import Header from '../component/header';
import Jumbotron from '../component/jumbotron';
import Footer from '../component/footer';

import About from '../component/about';
import Content1 from '../component/conten1';
import Porto from '../component/port';

export default ()=>{
  return(
    <div>
      <Header/>
      <Jumbotron/>
      <About/>
      <Content1/>
      <Porto/>
      <Footer/>
    </div>
  );
}