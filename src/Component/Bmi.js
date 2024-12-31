import React, { useState } from 'react';

const Bmi = () => {
    const [weight,setWeight] = useState()
    const [height, setHeight] = useState();
    const [bmiResult, setBmiResult] = useState();
    const [msg, setMsg] = useState();
    const handleInput = (event) =>{

        if (event.target.name == 'weight') {
            setWeight(event.target.value);
        }
        if (event.target.name == 'height') {
            setHeight(event.target.value);
        }

    }
  const calculate = () =>{
    let meter = height*0.3048;
    let meterSquare = meter*meter;
    let bmi = (weight/meterSquare).toFixed(2);
    console.log(bmi);
    setBmiResult(`Your BMI is : ${bmi}`)
    if(bmi < 18){setMsg("You Are Underweight")
    }
       if(bmi >= 18 && bmi < 25){setMsg("You Are Normalweight")
    }
      if(bmi >= 25 && bmi < 30){setMsg("You Are Overweight")
    }
      if(bmi >= 30){setMsg("You Are Obese")
    }}
const reloadBtn = ()=>{
    window.location.reload();
}
  return (
    <div className='container'>
        <div className='heading'>
            <h1>BMI Calculator</h1>
        </div>
        <div className='inputs'>
            <p>Enter your weight (Kg)</p>
            <input type='text' placeholder='Weight' name='weight' onChange={handleInput} />  
            <div className='height'>
            <p>Enter your height (Feet)</p>
            <input type='text' placeholder='Height' name='height' onChange={handleInput} />
            </div>
        </div>
        <div className='btns'>
            <button onClick={calculate}>Calculate</button>
            <button className='reloadBtn' onClick={reloadBtn}>Reload</button>
        </div>
        <div className='result'>
            <p>{bmiResult}</p>
            <p>{msg}</p>
        </div>
    </div>
  )
}
export default Bmi
 