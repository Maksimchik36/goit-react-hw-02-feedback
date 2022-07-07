const Statistics = ({good, neutral, bad, total, positivePercentage}) => { 
  return (<div>
  <p>Statistics</p>
  <ul><li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage || 0}%</li>
  </ul>  
  </div>
  )    
  }

export default Statistics;