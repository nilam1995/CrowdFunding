import "../styles/globals.css";

import { Footer, NavBar} from '../Components'
import {CrowdFundingProvider} from '../Context/CrowdFunding'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <CrowdFundingProvider>
        <Footer/>
        <Component {...pageProps} />
        <NavBar/>
      </CrowdFundingProvider>
    </div>
  );
}
