import Header from './component/nav/Header'
import MainSwiper from './component/MainSwiper'
import MainContents from './component/MainContents'
import Issue from './component/Issue'
import Campaign from './component/Campaign'
import MainProject from './component/MainProject'
import Support from './component/Support'
import Newslatter from './component/Newslatter'
import Footer from './component/nav/Footer'
import QuickButton from './component/QuickButton'

function App() {
  return (
    <>
      <Header></Header>
      <MainSwiper></MainSwiper>
      <MainContents></MainContents>
      <Issue></Issue>
      <Campaign></Campaign>
      <MainProject></MainProject>
      <Support></Support>
      <Newslatter></Newslatter>
      <Footer></Footer>
      <QuickButton></QuickButton>
    </>
  );
}

export default App;
