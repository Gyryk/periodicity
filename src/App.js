import './App.css';
import Title from "./assets/Title.png"

function App() {
  const gen = () => {
    var input = document.getElementById('inputText').value.toLowerCase()
    let result = ""
    if(input.value !== ""){
      let c = 0
      while(c < input.length){
        var found = false;

        for(let e = 0; e < elements.length; e++){
          var len = elements[e][0].length
          if(input.substring(c, c+len) === elements[e][0].toLowerCase()){
            result += elements[e][1]
            result += " "
            found = true
            c += len
          }
        }
        if(!found){
          if(input[c] === " "){
            result += "\n"
            c++
          }
          else{
            for(let f = 0; f < fakes.length; f++){
              if(input[c] === fakes[f][0].toLowerCase()){
                result += fakes[f][1]
                result += " "
                found  = true
                c++
              }
            }

            if(!found){
              result = "The elements to convert that phrase into don't exist..."
              break
            }
          }
        }
      }
    }

    document.querySelector('.result').innerText = result
  }

  return (
    <div className="App">
      <div className="title">
        <img src={Title} alt="PERIODIC-IFY"/>
      </div> <br></br>

      <div className="User Text">
        <div class="textInputWrapper">
          <input placeholder="Encode any phrase..." type="text" class="textInput" id="inputText"/>
        </div> <br></br>
          <div class="buttons">
            <button class="btn" id="generate" onClick={gen}><span></span><p data-start="Hi" data-text="Ele-Mental" data-title="Generate"></p></button>
          </div>
      </div> <br></br> <br></br>
      <h1>
        <div className="result">
          Hydrogen Iodine
        </div>
      </h1>

      <footer>
        &copy; <a href="https://gyryk.github.io/projects" target="_blank">Gyryk</a>, 2023
      </footer>
    </div>
  );
}

const elements = [['Uut', 'Ununtrium'], ['Uup', 'Ununpentium'], ['Uus', 'Ununseptium'], ['Uuo', 'Ununoctium'], ['He', 'Helium'], ['Li', 'Lithium'], 
['Be', 'Beryllium'], ['Ne', 'Neon'], ['Na', 'Sodium'], ['Mg', 'Magnesium'], ['Al', 'Aluminium'], ['Si', 'Silicon'], ['Cl', 'Chlorine'], ['Ar', 'Argon'], 
['Ca', 'Calcium'], ['Sc', 'Scandium'], ['Ti', 'Titanium'], ['Cr', 'Chromium'], ['Mn', 'Manganese'], ['Fe', 'Iron'], ['Co', 'Cobalt'], ['Ni', 'Nickel'], 
['Cu', 'Copper'], ['Zn', 'Zinc'], ['Ga', 'Gallium'], ['Ge', 'Germanium'], ['As', 'Arsenic'], ['Se', 'Selenium'], ['Br', 'Bromine'], ['Kr', 'Krypton'], 
['Rb', 'Rubidium'], ['Sr', 'Strontium'], ['Zr', 'Zirconium'], ['Nb', 'Niobium'], ['Mo', 'Molybdenum'], ['Tc', 'Technetium'], ['Ru', 'Ruthenium'], 
['Rh', 'Rhodium'], ['Pd', 'Palladium'], ['Ag', 'Silver'], ['Cd', 'Cadmium'], ['In', 'Indium'], ['Sn', 'Tin'], ['Sb', 'Antimony'], ['Te', 'Tellurium'], 
['Xe', 'Xenon'], ['Cs', 'Caesium'], ['Ba', 'Barium'], ['La', 'Lanthanum'], ['Ce', 'Cerium'], ['Pr', 'Praseodymium'], ['Nd', 'Neodymium'], ['Pm', 'Promethium'], 
['Sm', 'Samarium'], ['Eu', 'Europium'], ['Gd', 'Gadolinium'], ['Tb', 'Terbium'], ['Dy', 'Dysprosium'], ['Ho', 'Holmium'], ['Er', 'Erbium'], ['Tm', 'Thulium'], 
['Yb', 'Ytterbium'], ['Lu', 'Lutetium'], ['Hf', 'Hafnium'], ['Ta', 'Tantalum'], ['Re', 'Rhenium'], ['Os', 'Osmium'], ['Ir', 'Iridium'], ['Pt', 'Platinum'], 
['Au', 'Gold'], ['Hg', 'Mercury'], ['Tl', 'Thallium'], ['Pb', 'Lead'], ['Bi', 'Bismuth'], ['Po', 'Polonium'], ['At', 'Astatine'], ['Rn', 'Radon'], 
['Fr', 'Francium'], ['Ra', 'Radium'], ['Ac', 'Actinium'], ['Th', 'Thorium'], ['Pa', 'Protactinium'], ['Np', 'Neptunium'], ['Pu', 'Plutonium'], 
['Am', 'Americium'], ['Cm', 'Curium'], ['Bk', 'Berkelium'], ['Cf', 'Californium'], ['Es', 'Einsteinium'], ['Fm', 'Fermium'], ['Md', 'Mendelevium'], 
['No', 'Nobelium'], ['Lr', 'Lawrencium'], ['Rf', 'Rutherfordium'], ['Db', 'Dubnium'], ['Sg', 'Seaborgium'], ['Bh', 'Bohrium'], ['Hs', 'Hassium'], 
['Mt', 'Meitnerium'], ['Ds', 'Darmstadtium'], ['Rg', 'Roentgenium'], ['Cn', 'Copernicium'], ['Fl', 'Flerovium'], ['Lv', 'Livermorium'], ['H', 'Hydrogen'], 
['B', 'Boron'], ['C', 'Carbon'], ['N', 'Nitrogen'], ['O', 'Oxygen'], ['F', 'Fluorine'], ['P', 'Phosphorus'], ['S', 'Sulfur'], ['K', 'Potassium'], 
['V', 'Vanadium'], ['Y', 'Yttrium'], ['I', 'Iodine'], ['W', 'Tungsten'], ['U', 'Uranium']]

const fakes = [['A', 'Allfathers'], ['D', 'Dirt'], ['E', 'Earth'], ['G', 'Gyryk'], ['J', 'Joker'], ['L', 'Takethe'], ['M', 'Mars'], ['Q', 'Quest'], 
['R', 'Random'], ['T', 'Tank'], ['X', 'Nope'], ['Z', 'Zamn']]

export default App;