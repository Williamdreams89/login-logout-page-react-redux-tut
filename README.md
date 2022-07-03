# Installation

<code>npm install redux react-redux @reduxjs/toolkit</code>

## Introduction

Supposing ypur app follows this structure:  
<code>Profile</code> -------> <code>App</code> <------- <code>Log in</code>

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

<code>function reducer(state, action) { </code> <br />
 <code> let newState; </code> <br />
  <code> switch (action.type) {  </code> <br />
 <code>    case 'increase':  </code>
 <code>      newState = { counter: state.counter + 1 };  </code> <br />
<code>      break; </code> <br />
<code>    case 'descrease':
<code>      newState = { counter: state.counter - 1 }; </code> <br />
<code>      break; </code> <br />
<code>    default: </code> <br />
<code>      throw new Error(); </code> <br />
<code>  } </code> <br />
<code>  return newState; </code> <br />
<code>}</code> <br />

