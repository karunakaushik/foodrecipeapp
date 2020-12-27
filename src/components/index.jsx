import React, { useEffect, useState } from 'react'
import styles from './src/css/main.module.css'
import Recipe from './recipe';
import FoodDatabase from './fooddatabase';

    const Main = () => {

        const APP_ID = 'c5344576';
        const APP_KEY = 'a73b4d8f6cc9d7942748a775780a8554';
      
        const [recipes, setRecipes] = useState([]);
        const [search, setSearch] = useState("");
        const [query, setQuery] =useState("");
      
       
       
      
        const getRecipes = async () => {
          const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
          const data = await response.json();
          setRecipes(data.hits);
          console.log(data.hits);
        }

       
        useEffect(() => {
            getRecipes();
         // eslint-disable-next-line
         }, [query]);
      
        const updateSearch = e => {
          setSearch(e.target.value);
        }
      
        const getSearch = e => {
            e.preventDefault();
            setQuery(search);
            setSearch('');
        }
  
        
        return (
            <div className={styles.outercontainer}>
                <div className={styles.innerBox}>
                <div className={styles.heading}>
                <h1>Food And Recipe Search</h1>
                </div>
                <div className={styles.searchDetails}>
                <h1>Searching by keyword</h1>
                <p>Enter a what you have eaten, like "coffee and croissant" or "chicken enchilada" to see how it works. We have accurate data tens of thousands of foods, including international dishes</p>
                </div>
                <div className={styles.searchDiv}>
                <form className={styles.formBox}  onSubmit= {getSearch}>
                    <input 
                        type="text" 
                        placeholder="Foods"
                        className={styles.formControl} 
                        value={search}
                        onChange={updateSearch}
                    />
                    &nbsp; 
                    &nbsp; 
                    <button type="submit" className={styles.searchButton}>Search</button>
                </form>
                </div>
                   <h2>Food Database</h2>
                <div className={styles.dataoffood}>
                    
                    {/* <br />
                    <br /> */}
                    {recipes.map(recipe =>(
                       <FoodDatabase 
                       key = {recipe.recipe.label}
                       title={recipe.recipe.label} 
                       image={recipe.recipe.image}
                       digest={recipe.recipe.digest}
                    />
          
                ))}

                </div>

                <br />
                <br />
               <div className={styles.recipeBox}>
               <h2>Recipes </h2>
                   {recipes.map(recipe =>(
                       <Recipe 
                       key = {recipe.recipe.label}
                       title={recipe.recipe.label} 
                       calories={recipe.recipe.calories} 
                       image={recipe.recipe.image}
                       ingredients={recipe.recipe.ingredients}
                       url={recipe.recipe.url}/>
          
                ))}

               </div>
               </div>
            </div>
        )
    }
export default  Main;


  

