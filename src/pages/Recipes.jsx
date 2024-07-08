import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/recipe-one.png";
import recipeTwoImage from "../assets/images/recipe-two.png";
import recipeThreeImage from "../assets/images/recipe-three.png";
import recipeFourImage from "../assets/images/recipe-four.png";

export default function Recipes() {
    return (
        <div className="px-10 py-10">
            
            <div className="text-center font-bold"> <h3>Search</h3></div>

            <div> 
                <div><h3>What is in your kitchen</h3></div>
                <p>Enter some ingredients</p>
            </div>
            <div>
                <i>MG</i>
                <input type="text" />
            </div>

            <div className="grid grid-cols-2 gap-5">
                <RecipeCard
                    image={recipeOneImage}
                    name="Chorizo & mozzarella gnocchi bake" />
                <RecipeCard
                    image={recipeTwoImage}
                    name="Coconut & squash curry" />
                <RecipeCard
                    image={recipeThreeImage}
                    name="Huevos Rancheros" />
                <RecipeCard
                    image={recipeFourImage}
                    name="Black forest Gateau" />
            </div>


        </div>

    );
}