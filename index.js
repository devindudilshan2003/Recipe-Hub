const recipes = [
  {name:"Pizza", image:"foods/pizza.avif", desc:"Made with a flat bread base topped with tomato sauce, cheese and meat, thenbaked in an oven.", category:"european"},
  {name:"Gulab Jamun", image:"foods/gulab jamun.jpg", desc:"Soft, deep-fried milk dough balls soaked in warm, sweet cardamom-flavored sugar syrup.", category:"indian"},
  {name:"Pittu", image:"foods/pittu1.jpg", desc:"Steamed cylinders made from rice flour and grated coconut, usually eaten with curry or coconut milk.", category:"sri"},
  {name:"Mango Curry", image:"foods/mango curry.jpg", desc:"Mango curry is a sweet, tangy, and spicy dish commonly found in Sri Lankan and South Indian.", category:"sri"},
  {name:"Kottu Roti", image:"foods/kotturoti.jpg", desc:"Popular Sri Lankan street food made with chopped roti, vegetables, eggs, and spicy curry.", category:"sri"},
  {name:"Hoppers", image:"foods/hoppers.jpeg", desc:"Crispy bowl-shaped Sri Lankan pancakes made from fermented rice batter, often served with sambol.", category:"sri"},
  {name:"Butter Chicken", image:"foods/butterchicken1.jpeg", desc:"Tender chicken cooked in creamy tomato gravy with butter, spices, and rich aromatic flavors.", category:"indian"},
  {name:"Samosa", image:"foods/samosa.jpeg", desc:"Crispy deep-fried pastry filled with spiced potatoes, peas, and flavorful herbs, popular street snack.", category:"indian"},
  {name:"Idli", image:"foods/idli.jpeg", desc:"Soft steamed rice cakes served with coconut chutney and spicy sambar, healthy traditional breakfast.", category:"indian"},
  {name:"Pasta", image:"foods/pasta.jpeg", desc:"Italian dish made from wheat noodles, cooked with sauces, vegetables, cheese, or meat.", category:"european"},
  {name:"Lasagna", image:"foods/lasagna.jpeg", desc:"Layered pasta baked with rich meat sauce, creamy cheese, and flavorful herbs.", category:"european"},
  {name:"Hamburgers", image:"foods/hamburgers.jpeg", desc:"Juicy grilled beef patty served in a soft bun with lettuce, tomato, and sauce.", category:"european"}
];

const container = document.getElementById("recipeList");
const mostPopular = document.getElementById("mostPopular");

function showAllRecipes(){
 
  mostPopular.style.display = "none";
  container.innerHTML = "";
  
  recipes.forEach(recipe=>{
    let card = `
      <div class="card" style="width:18rem;">
        <img src="${recipe.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${recipe.name}</h5>
          <p class="card-text">${recipe.desc}</p>
<a href="recipe-details.html?name=${recipe.name}" class="btn btn-primary">VIEW RECIPE ></a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filterCategory(category){
  if(category === "category") return; 
  mostPopular.style.display = "none"; 
  container.innerHTML = "";

  recipes.forEach(recipe=>{
    if(recipe.category === category){
      let card = `
        <div class="card" style="width:18rem;">
          <img src="${recipe.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text">${recipe.desc}</p>
          </div>
        </div>
      `;
      container.innerHTML += card;
    }
  });
}

function searchRecipes(){

  let input = document.getElementById("searchInput").value.toLowerCase();

  mostPopular.style.display = "none";
  container.innerHTML = "";

  recipes.forEach(recipe=>{

    if(recipe.name.toLowerCase().includes(input)){

      let card = `
      <div class="card" style="width:18rem;">
        <img src="${recipe.image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${recipe.name}</h5>
          <p class="card-text">${recipe.desc}</p>
        </div>
      </div>
      `;

      container.innerHTML += card;

    }

  });

}