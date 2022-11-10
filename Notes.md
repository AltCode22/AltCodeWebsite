Learning React basics

#array destruction

const cities = ["Tokyo", "San Francisco"];
console.log(cities); // prints the cities

const [firt, second] = ["Tokyo", "San Francisco"];
console.log(firt); // prints the first city

#about useState in react

import React, {useState} from 'react';

const [coder, setCoder] = useState("Yes")

<h2>Liked the roadmap, {coder}.</h2>
<button onClick={() => setCoder("No!")}>No</button>

#about useEffect: It is used to manager side effects related to component render

import React, {useEffect} from 'react';

useEffect(() => {
console.log(`This is ${} emotion now.`);
}, [])

=> The useEffect takes two arguments: function(called when effect happen) and array(when the efeect is actually beeing called)

=> passing an empty array means the effect will not called again after first render[]. It is called dependent array

Example:
const [secondary, setSecondary] = useState("Not Interested!")

useEffect(()=> {
console.log(`This is ${coder} now.`);
}, [coder]);

<button onClick={() => setSecondary("Interested")}>Interested</button>

#about useReducer

const [checked, setChecked] = useReducer(function, booleanValue);

##Example 1:

const [checked, setChecked] = useReducer((checked) => !checked, false);

<input
 type="checkbox"
 value={checked}
 onChange={setChecked}
/>
<label>{checked ? "checked" : "not checked"}</label>

##Example 2:
const [checked, setChecked] = useState(false);

<input#
 type="checkbox"
 value={checked}
 onChange={() => setChecked((checked) => !checked)}
/>
<label>{checked ? "checked" : "not checked"}</label>


#Forms in react

###useRef- creates uncontrolled compinent where manager the form outside of state

//grab the name and color from input
  const txtTitle = useRef();
  const hexColor = useRef();

  //prevents the user from refreshing the page
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    alert(`${title}, ${color}`);

    txtTitle.current.value = "";
    hexColor.current.value = ""; //empty the input values
  };

  <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text"
          placeholder="color title..."
        />
        <input 
          ref={hexColor}
          type="color"
        />
        <button>Add</button>
      </form>


###useState for forms

function Form() {

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000000")

  //prevents the user from refreshing the page
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);

    setTitle("") //clear the inputs
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="color title..."
        />
        <input 
          value={color}
          onChange={event => setColor(event.target.value)}
          type="color"
        />
        <button>Add</button>
      </form>
    </div>
  );
}


#Custom Hooks

syntax:

function useInput() {
    const [value, setValue] = useState()
    return [ //return an array
        {value, onChange: e => setValue(e.target.value)}
    ]
}

#Fetch Data from external API (ex- Github API)

fetch from https://api.github.com/users/tarunsinghofficial

Example;

    function GithubUser({name, location, bio, avatar}) {
      return (
        <div className="bg-green-200 w-100 h-100">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-2xl font-bold">{bio}</h2>
      <p className="font-bold">{location}</p>
      <img src={avatar} className="rounded w-20 h-20" alt="user_img" />
      </div>
      );
    }

    //container for data
    const [data, setData] = useState(null); //initial state is null

    useEffect(() => {
      fetch(`https://api.github.com/users/tarunsinghofficial`)
        .then((response) => response.json())
        .then(setData)
    }, []); //request for data is only once when app is rendered

    <GithubUser 
        name={data.name}
        bio={data.bio}
        location={data.location}
        avatar={data.avatar_url}
    />


#react router- moves from component to component or page to page

1. npm i react-router-dom

2. 


