import Header from "./components/HeaderBlock";
import Layout from "./components/LayoutBlock";
import Footer from "./components/FooterBlock";
import bg from ".components/img/bg3";
//import Reactbg1 from "./components/img/bg1.jpg";
const App = () => {
//  const urlBg = { bg };
 // const colorBg = ' #72d7df'
  return (
    <>
      <Header
        title='This is new Titel'
        descr='This is new description'
      />
      <Layout
   //     style= {background:`url(${urlBg})`}
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
    //    style={backgroundColor: `${colorBg}`}
        title='This is new Titel id3' 
        descr='This is new description'
        id="3" />
      <Footer />
    </>
  )
}
 

export default App;
