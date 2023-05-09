import './App.scss';
import './index.scss';
import './style/footer.scss';
import './style/navbar.scss';
import './style/product.scss';
import './style/images.scss';
import './style/info.scss';

function App({Component, pageProps}) {
  return (
    <>
        <Component {...pageProps}/>
    </>
    
  )
}

export default App