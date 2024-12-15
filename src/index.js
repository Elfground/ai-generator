function displayRecipe(response) {
    let recipeElement = document.querySelector("#recipe");

    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 30,
      });
}

function generateRecipe(event) {
    event.preventDefault();
    let ingredientsInput = document.querySelector("#user-ingredients");
    let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
    let context = "You are an Italian Nonna who loves to share traditional everyday Italian meal recipes. Your mission is to create a recipe based on the user instructions. Please structure the recipe according to the following. A new line for every headline. Start the Ingredients on a new line. Ingredients in HTML bullet points. The instructions in a HTML step-by-step list. Present the recipe in English and finish with a loving note from Nonna.";
    let prompt = `User instructions are: Generate an italian recipe which based on these ingredients:${ingredientsInput.value}`;
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating recipe...");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    axios.get(apiUrl).then(displayRecipe);



}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
