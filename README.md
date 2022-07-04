# My React Redux Journey 

## Installation

<code>npm install redux react-redux @reduxjs/toolkit</code>

## Introduction

Supposing ypur app follows this structure:  
<code>Login</code> <------- <code>App</code> -------> <code>Profile</code>

Perhaps, the Login component is required to access one's profile and it requires some initial state of the app to make its rendition when the initial state of the app changes. With this, one would have to create several number of states for several reasons and pass them as props to those components needing them. These come with their own ordeals and headaches and are quite error prone. The best way to deal with situation is to use a state management library. In this tutorial, I am introducing mysel to the redux state management library plus some dependencies.

## The First Steps

#### Create the  <code>Profile component</code> and the <code>Login component</code>. And inject them into your <code>App component</code>.
#### In <code>index.js</code>, Create a store (i.e. serving as the container that houses all the different states used in your application): <br />
<code>import { configStore } from "@reduxjs/toolkit";</code> <br />
<code>const store = configStore({ reducer: {} })</code> <br />
Next <code>import { Provider } from "react-redux";</code> <br />
This would determine which components of your app can have access to your <code>store</code>. In this case, wrap the <code>&lt;App /&gt;</code> in <code>index.js</code> to include all the components within my app.
<br />
Like this:  <br />
<code> """</code>
<br />
<code> &lt;Provider &gt;</code>
<br />
<code> &lt; App / &gt; </code>
<br />
<code> &lt;Provider / &gt;</code>
<br />
<code> """</code>
<br />

Pass the <code> store</code> as props to the <code>&lt;Provider&gt;</code>; <code> &lt;Provider store={props}&gt;</code>. This would tell the <code>&lt;Provider&gt;</code> what <code>configStore instance</code> should be passed to our <code>&lt;App /&gt;</code> and therefore its embeded components, which is the <code>store</code>
<br />

## Reducer, What is it?
The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state. <br />
A reducer is a function that takes in some information passed as arguments about current states of our application, for example, the current state of our application or components; and also an "action" that you wanna perform on the state and returns back the new state or value of the application.
This is all bout state management with redux.
<br />
The following reducer function supports the increase and decrease of a counter state:

<code>For Example</code>
<br />
<code>function reducer(state, action) { </code> <br />
<code>.... let newState; </code> <br />
<code>.... switch (action.type) {  </code> <br />
 <code>........case 'increase':  </code>
 <code>........newState = { counter: state.counter + 1 };  </code> <br />
<code>.........break; </code> <br />
<code>....case 'descrease':
<code>........newState = { counter: state.counter - 1 }; </code> <br />
<code>........break; </code> <br />
<code>    default: </code> <br />
<code>........throw new Error(); </code> <br />
<code>....} </code> <br />
 <br />
<code>....return newState; </code> <br />
 <br />
<code>}</code>
 
 ## Creating the User Profile Component
 
 Create a <code>User.jsx</code> and within it, do the following:
 <br/>
 <code>import {createSlice} from "@reduxjs/toolkit"</code>
 The <code>{createSlice} function</code> allows you to create your reducers in a very easy way where it becomes intuitive for you to split your logic and be able to access it throughout your application so that it become a lot easier for you to change stuffs and access those values in different components.
 <br />

 
<code> export const userSlice = createSlice({name: "user", initialState: {value:{name: "", age: 0, email:""}}, reducers: login: (state, action)=>{state.value = action.payload}})</code>
<br />
 <code>export default userSlice.reducer;</code>
 <br />
 <br />
### E X P L A N A T I O N
 As explained initially, the <code>createSlice</code> makes it possibly easier to create reducers and make it accessible throughout your application.
  It is taking the following props: name (which is the name of the state), initialState (which is the initial state of the component as it names echoes) and reducers (which as defined above takes 2 parameters: <code>state</code> and <code>action</code>).
 - The <code>name</code> of the state is <code>user</code>
 - The <code>initialState</code> of <code>user</code> is passed some values i would want change dynamically in time in the <code>reducer function</code> i would be creating. For example, on logging in, a name which has an initial value of empty string, age set to 0 years and empty email.
 - In the <code>reducers</code>, i would create a reducer function called <code>login</code>. Obvious for all reducers, login would take 2 params <code>state</code> and <code>action</code>. Where <code>state</code> holds the actual value of the current state or the initial state. So for example, if this is first time we are logging our user in it would take the initial state values and get changed when we alter those values. Briefly, it is just keeping track of the initial state. Whereas <code>action</code> is an object containing 2 things: <code>payload</code> and then <code>type</code>. The <code>payload</code> is an object which you can pass in the information you wanna use when changing your state. For example, <code>payload</code> can be used to create a function that return the first name of <code>name</code>. On the other hand, <code>action.type</code> can be used to trigger different types of actions you wanna take. Look beyond this tutorial for more on  <code>action.type</code>.
 - In the  <code>login reducer function</code>, we are going to set the state.value as equal to whatever we get from the <code>action.payload</code>
 - Next is to export the userSlice and the userSlice.reducer to make available for imports from other components
 
 ## Next and final Steps 
 
- Now, back in <code>index.jsx</code>, <code>import userReducer from "./features/user"</code>. (Don't worry where the userReducer is from, its from nowhere, any name and react would recognize that). 
 - Next, add the user reducer to the reducers object as <code>... user: userReducer</code> in the <code>store</code> <code>index.jsx</code> file.
 - And that is it, we can now access this state and information accross all other components.
 
 
 ## Using the state created 
- In order to use the state created the <code>useSelector Hook</code> must be used.
 ## The <code><b>useSelector</b></code>, what is its usage and significance?
 - It is used to grab values of our state everytime we need to use it.
 - To use it, just instantiate the <code>useState Hoo on the state object you and that is it.
 
 
