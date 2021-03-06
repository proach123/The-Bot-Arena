import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Landing/landing.css'
import breakBot from './audio/Breakbot.mp3'
console.log(breakBot)



let dummbyShop = [{id: 1, type:'body', cost: 12, name:'steel chassis', hp:5, speed:1, attack: 0, purchased: false},
{id: 2, type: 'body', cost: 26, name:'carbon steel chassis', hp:10, speed:3, attack: 0, purchased: false},
{id: 3, type: 'body', cost: 26, name:'aluminum chassis', hp:3, speed:10, attack: 0, purchased: false},
{id: 4, type: 'body', cost: 30, name:'aluminum alloy chassis', hp:6, speed:9, attack: 0, purchased: false},
{id: 5, type: 'body', cost: 100, name:'unobtanium chassis', hp:35, speed:15, attack: 0, purchased: false},
{id: 6, type: 'weapon', cost: 14,name:'drill', hp:1, speed:1, attack: 5, purchased: false} ]

//double the point values of each parts, point total for cost


let dummbyBotArray = [{name: 'balanced bot', attack:5, hp:5, speed: 5,},
  {name: 'Attack bot', attack:13, hp:1, speed: 1,},
  {name: 'Defence bot', attack:1, hp:13, speed: 1,},
  {name: 'Speedy bot', attack:1, hp:1, speed: 13,},
  {name: 'Champion bot', attack:3, hp:6, speed: 6,}]

//dumby data above
  

export default function Landing(props) {

  const [shop, setShop] = useState(dummbyShop)
  const [botArray, setBotArray] = useState(dummbyBotArray)
  const [protoBot, setProtoBot] = useState(
    {
      name:'',
      baseAttack:1,  
      baseSpeed: 1,
      baseHp: 1,
      items:[]
    }
  );
  const [balance, setBalance] = useState(100);
  const [chassisBought, setChassisBought] = useState(false);
  const [userBot, setUserBot] = useState({})


  
  
  useEffect(() => {
    
  })
  
  function createBot() {

    setProtoBot(protoBot)
    
  }
//item is an obj.
//protobot.items is an array of obj.
  function buyPart(item) {
    let protoBotCopy = protoBot
    let shopCopy = shop
    
    if(item.purchased == false){
      

      for (let i=0; i < shopCopy.length; i++){
        if(i == item.id - 1){
          
         shopCopy[i].purchased = true
         
         setShop(shopCopy)
         
        } 
      }
      
      protoBotCopy.items.push(item)
      if(item.cost < balance){
       let cost = item.cost

       setBalance(balance - cost)
       setProtoBot(protoBotCopy)
    
    } else return alert('you do not have enough money')
    } else return alert('Item is already purchased')
  
}




  const handleInput = event => {
      let name = event.target.value;

   
    setProtoBot({...protoBot, name})
  }
  

  const mappedShop = shop.map((item) => {
    //filter out anything in bot.items
    return (
      <div className='itemDisplay'>
        
        <h3>{item.name}</h3>
        <h5>Item cost: {item.cost}</h5>
        <h5>item type: {item.type}</h5>
        <h5>attack: {item.attack} defence: {item.hp} speed bonus: {item.speed}</h5>
        <button onClick={()=>buyPart(item)}>Purchase</button>

      </div>
    )
  })


  const mappedProtoItems = protoBot.items.map((item) => {
    
    return (
      <div className='ProtobotItems'>
        
        <h3>{item.name}</h3>
        <p>Attack bonus: {item.attack}</p>
        <p>Hp bonus: {item.hp}</p>
        <p>Speed bonus: {item.speed}</p>


      </div>
    )
  })
  
  
    return (

     <div className='landing'>
     
      <div className='HeaderStats'>
  <div className="fire">
    <div class="fire-left">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
    </div>
    <div class="fire-main">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
    </div>
    <div class="fire-right">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
    </div>
    <div class="fire-bottom">
    <div class="main-fire"></div>
    </div>


    <div class="gears" id="two-gears">
    
    <div class="gears-container">
      <div class="gear-rotate"></div>
      <div class="gear-rotate-left"></div>
    </div>

      <h1>Welcome to the Factory</h1>
  </div>
  
</div>

      <div className='bigiftrue'>
      <h1>Battle Bots V2</h1>
      <input placeholder='bot name' onChange={handleInput} type="text"/>
      <p>Your bot name: {protoBot.name}</p>
      <p>Attack: {protoBot.baseAttack}</p>
      <p>Hp: {protoBot.baseHp}</p>
      <p>Speed: {protoBot.baseSpeed}</p>
      <p>Items: {mappedProtoItems}</p>
      <h2>Choose your botty parts!</h2>
      
      <p>Your Balance:<div className='balance'> ${balance}</div></p>
      </div>
      </div>
      <div className='create'>
      <Link to={`/arena`}>
      <button onClick={createBot}>Create</button>
      </Link>
      </div>
      <div>{mappedShop}</div>
      
      <tag></tag>


      
       
            
      </div>
    );
  
}