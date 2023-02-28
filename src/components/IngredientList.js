import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {

const ingredientElements = ingredients.map(ingredients => {
    return <Ingredient key={ingredients.id} {...ingredients} />
})

return (
    <div className='ingredient-grid'>
      {ingredientElements}
    </div>
    
  )
}
