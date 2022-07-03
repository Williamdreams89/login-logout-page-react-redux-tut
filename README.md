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
This would determine which components of your app can have access to your <code>store</code>. In this case, wrap the <code><App /></code> in <code>index.js</code> to include all the components within my app.

