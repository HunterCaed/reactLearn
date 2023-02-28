import React, { useState, useEffect } from 'react';
import Recipelist from './RecipeList.js';
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit.js';
import DataFetching from './DataFetching.js';
import TopSearch from './TopSearch.js';


export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'




function App() {

  //const [data, setData] = React.useState(null)
  //const [backendData, setBackEndData] =useState([{}])

  useEffect(() => {
    const getDatMore = async () => {
      const res = await fetch('http://localhost:4000/api')
      const data = await res.json()
      console.log(data)
    }
    getDatMore()
  }, [])

  const[selectedRecipeId, setSelectedRecipeId] = useState()
  
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
    // return sampleRecipes
  })
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  
  
  // React.useEffect(() => {
  //   fetch("/recipe")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  // }, [])
  
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  
  const recipeContextValue = {
   handleRecipeAdd,
   handleRecipeDelete,
   handleRecipeSelect,
   handleRecipeChange
  }

  function handleRecipeSelect(id) {
    
    setSelectedRecipeId(id)

  }
  
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id ))
  }
  
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)

  }
  
  return (
    <>
    <TopSearch/>
    <RecipeContext.Provider value={recipeContextValue}>
      
      <Recipelist recipes={recipes}/>
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/> }
      {/* <DataFetching /> */}
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </RecipeContext.Provider>
    </>
  )

}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put Salt\n2. Put Chicken in Oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put Paprika on Pork.\n2. Put Pork in Oven\n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '1 Tbs'
      }
    ]
  }
]

export default App;
