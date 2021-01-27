import Header from "./components/HeaderBlock";
import Layout from "./components/LayoutBlock";
import Footer from "./components/FooterBlock";
//import Reactbg1 from "./components/img/bg1.jpg";
const App = () => {

  return (
    <>
      <Header
        title='This is new Titel'
        descr='This is new description'
      />
      <Layout
        id="1"
        title='This is new Titel id1' 
        descr='This is new description'
        />
      <Layout
        hideBackground
        title='This is new Titel id2' 
        descr='This is new description'
        id="2" />
      <Layout
        title='This is new Titel id3' 
        descr='This is new description'
        id="3" />
      <Footer />
    </>
  )
}
 

export default App;
