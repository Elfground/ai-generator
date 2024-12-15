function generateRecipe(event) {
    event.preventDefault();
    console.log("Generating recipe...");

    let recipeElement = document.querySelector("#recipe");

    new Typewriter("#recipe", {
        strings: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi dolores consequuntur incidunt, modi natus nobis repellat.",
        autoStart: true,
        cursor: "",
        delay: 30,
      });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
