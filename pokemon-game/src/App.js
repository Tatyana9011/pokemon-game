import Header from "./components/HeaderBlock";
import Layout from "./components/LayoutBlock";
import Footer from "./components/FooterBlock";
import PokemonCard from "./components/PokemonCard";
import Bg1IMG from "./components/img/bg22.jpg";
import Bg22IMG from "./components/img/bg1.jpg";
import s from "./style.module.css";
import POKEMONS from "./components/json.json"

const App = () => {
 
  return (
  <>
      <Header
        title='This is new Title'
        descr='This is new description'
      />
      <Layout
          id="1"
          title='Card' 
          urlBg={Bg22IMG}
        >
          <p> In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.  </p>
          <div className={s.flex}>
              {
            POKEMONS.map(item => <PokemonCard
              name = {item.name}
              img= {item.img}
              id = {item.id}
              type= {item.type}
              values= {item.values}
            />
            )
          }
          </div>
        </Layout>
        
      <Layout
        colorBg= '#5ec3e2'
        title='This is new Title id2' 
        id="2"
      >
        <p> In the game two players face off against one another, one side 
            playing as "blue", the other as "red" on a 3x3 grid.
        </p>

        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
            To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player
            must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is
            higher than the player's card, the player's card will be captured and turned into the opponent's color.
            If the player's rank is higher, the opponent's card will be captured and changed into the player's color
            instead.
        </p>
        </Layout>

      <Layout
        title='This is new Titel id3' 
        id="3"
        urlBg={Bg1IMG}
      >
        <p> In the game two players face off against one another, one side 
            playing as "blue", the other as "red" on a 3x3 grid.
        </p>

        <p>Each player has five cards in a hand and the aim is to capture the 
        opponent's cards by turning them into the player's own color of red or blue.
        To win, a majority of the total ten cards played (including the one card that is not
        placed on the board) must be of the player's card color. To do this, the player
        must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks'
        of the sides where the two cards touch will be compared. If the rank of the opponent's card is
        higher than the player's card, the player's card will be captured and turned into the opponent's color.
        If the player's rank is higher, the opponent's card will be captured and changed into the player's color
        instead.
        </p>
        </Layout>
      <Footer/>
    </>
  )
}
 

export default App;
