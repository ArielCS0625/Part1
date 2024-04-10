import { useState } from 'react'



const Title = (prop)=>{

  return (
    <>
      <h1>{prop.title}</h1>
    </>
  )
}

const Button = (prop)=>{

  const {name, handleClick} = prop;

  return(
    <button onClick={()=>{handleClick(name)}}>{name}</button>
  )
}

const Static = (prop)=>{

  const {good, neutral, bad} = prop;
  return (
    <>
    <table>
      <tbody>      
      <StaticLine name="good" value={good}/>
      <StaticLine name="good" value={good}/>
      <StaticLine name="neutral" value={neutral}/>
      <StaticLine name="bad" value={bad}/>
      <StaticLine name="all" value={bad+good+neutral}/>
      <StaticLine name="average" value={Average(good,neutral,bad)}/>
      <StaticLine name="positiv" value={AvePos(good,neutral,bad)} isPercet = {true}/>      
      </tbody>      
    </table>
      
    </>
  );
      
}

const StaticLine = (prop)=>{  
  const {name, value, isPercet} = prop;
  
  if(isPercet)
  return(
      <>
        <tr>      
          <td>{name}</td>
          <td>{value} %</td>
        </tr>
      </>    
  );
  else
  return(
    <>
      <tr>
        <td>{name}</td>
        <td>{value} </td>
      </tr>
    </>   
  );
}

const Average = (_g, _n, _b)=>{
  const all = _b + _g + _n;
  return all == 0 ? 0 : (_g - _b)/all;
}

const AvePos = (_g, _n, _b)=>{
  const all = _b + _g + _n;
  return all == 0 ? 0 : (_g*100)/all;
}


const App = ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const handleClick = (_name)=>{
         
      switch (_name) {
        case 'good':
          setGood(good+1);
        break;
        case 'neutral':
          setNeutral(neutral+1);
        break;
        case 'bad':
          setBad(bad+1);
        break;
        default:
        break;
      } 
      
  }
  
  if(good + neutral + bad > 0)
  return (
    <>
      <Title title = "give feedback"/>
      <span>
      <Button name = "good" handleClick={handleClick} />
      <Button name = "neutral" handleClick={handleClick} />
      <Button name = "bad" handleClick={handleClick} />
      </span>
      <Title title = "statics"/>
      <Static good={good} neutral={neutral} bad={bad}/>
    </>
  )
  else
  return (
    <>
      <Title title = "give feedback"/>
      <span>
      <Button name = "good" handleClick={handleClick} />
      <Button name = "neutral" handleClick={handleClick} />
      <Button name = "bad" handleClick={handleClick} />
      </span>
      <Title title = "statics"/>
      <p>No feedback given</p>
    </>
  )
}

export default App
