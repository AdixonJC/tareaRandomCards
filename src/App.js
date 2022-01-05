import randomnumbers from "./randomnumbers"
import quotes from "./quotes.json"
import { useState } from "react"
import Button from "./components/Button"
import "./icon.css"
import Randomcards from "./components/Randomcards"
import "./styles/Randomcards.css"

function App() {

const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871" , "#2C73D2", "#008F7A", "#B39CD0", "#4B4453"]
const random = randomnumbers(quotes)
const randomColors = randomnumbers(colors)
const [card , setCard] = useState(quotes[random])
const [colorsCards, setColorsCards] = useState([colors[randomColors]])

const handleRandomCards = () => {
  setCard(quotes[random])
  setColorsCards(colors[randomColors])
}


  return (<>
    <div className="second-cards" style={{background : colorsCards}}>
      <div className="primary-cards">
           <Randomcards
           randomColors={colorsCards}
           card={card}/>
          <div className="button-end">
                 <Button
                 randomColors={colorsCards}
                 handleRandomCards={handleRandomCards}
                 card={card}/>
           </div>
      </div>
    </div>

  </>);
}

export default App;
