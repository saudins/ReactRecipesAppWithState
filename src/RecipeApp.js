import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Put spaghetti in water and make it ready. Then serve with tomatos sauce.",
          ingredients: ["Pasta", "Water", "Tomatos sauce"],
          img: "spagetti.jpg"
        },
        {
          id: 1,
          title: "Cake",
          instructions: "Cook cook and make chocolate cake!",
          ingredients: ["Raw chocolate", "Other ingredients"],
          img: "Cake.jpg"
        },
        { 
          id: 2,
          title: "Pizza",
          instructions: "Put all things together with love.",
          ingredients: ["Dough bought in Rimi", "Sauce", "Tomatos", "Cheese"],
          img: "pizza.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;