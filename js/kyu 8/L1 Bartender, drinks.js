function getDrinkByProfession(param){
    let drinks = {
      "jabroni" :	"Patron Tequila",
      "school counselor" :	"Anything with Alcohol",
      "programmer" :	"Hipster Craft Beer",
      "bike gang member" :	"Moonshine",
      "politician" :	"Your tax dollars",
      "rapper" :	"Cristal"
      }
    
    if(param.toLowerCase() in drinks){
      return drinks[param.toLowerCase()]
    }else{
      return 'Beer'
    }
      
      
    }