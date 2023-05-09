import Head from "next/head"

import NavBar from './components/NavBar';
import ShirtInfo from './components/ShirtInfo';
import ShirtImages from './components/ShirtImages.js';
import Product from './components/Product';
import Footer from './components/Footer';

import Sparkles1 from './media/Sparkles-1.png';
import Sparkles2 from './media/Sparkles-2.png';
import Primadonna from './media/Primadonna.png';
import Dreams from './media/Dreams.png';

export const getServerSideProps = async () => {
  const othersTitle = "You may also like"
  const price = "$40.00 USD"
  const sparkles = "Sparkles Tour Tee"
  const primadonna = "Primadonna Tee"
  const dreams = "Dreams Frame Tee"
  return { props: { othersTitle, price, sparkles, primadonna, dreams } }
}

function Index({othersTitle, price, sparkles, primadonna, dreams}) {

  return (
    <>
      <Head>
          <meta charset="utf-8"/>
          <title> Chrome Stars Tour Tee – Marina US </title>
          <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="App">
            <header className="App-header">
                <NavBar/>        
            </header>
            <div className="shirt-grid">
                <div className="shirt-images" >
                    <ShirtImages/>
                </div>
                <div className="shirt-info">
                    <ShirtInfo/>
                </div>
            </div>
            <div className='other-shirts'>
                <br/>
                <h2 className='others-title'> {othersTitle} </h2>
                <div className='products'>
                    <Product image1={Sparkles1} image2={Sparkles2} name={sparkles} price={price}/>
                    <Product image1={Primadonna} image2={Primadonna} name={primadonna} price={price}/>
                    <Product image1={Dreams} image2={Dreams} name={dreams} price={price}/>
                </div>
            </div>
            <br/> <br/> <br/> <br/> <br/>
            <footer> 
                <Footer/>
            </footer>
            
        </div>
    </>
  )
}

export default Index