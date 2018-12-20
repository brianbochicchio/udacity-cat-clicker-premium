// Cat Clicker Premiun Octopus Edition

   /*  BIG TODO
    *  Convert the project to the MVO pattern
    *  
    * Script: 
    * Reorganize and refactor the code
    * ideas for next steps
    * move get functions to Octupus
    * figure out a better way to add the listner and track click events
    * 
    *  HTML:
    * 
    */


// This is my data
var model = {

    init: function(){
  
                
    },
    getCats: function(){
        return this.cats;
    },
    getFirstCat: function(){
        // used to define the cat to start with on first load
        return this.cats[0];

    },
    cats: [{
        name: "Tigger",
        imageName: "tigger.jpg",
        clicks: 0
    },
    {
        name: "Patchy",
        imageName: "patchy.jpg",
        clicks: 0
    },
    {
        name: "Max",
        imageName: "max.jpg",
        clicks: 0
    },
    {
        name: "Albert",
        imageName: "albert.jpg",
        clicks: 0
    },
    {
        name: "Tony",
        imageName: "tony.jpg",
        clicks: 0
    }]
   

};

// This is the action
var octopus = {

init: function(){
    model.init();
    view.init();
}

};

// This is the user view
var view = {

    init: function(){
        view.renderCatList();
        view.renderCat(model.getFirstCat());



    },
    renderCatList: function(){
        let catArr = model.getCats();
        let namesList = "";
        let namesListContainer =  document.querySelector('#theKittehs');    
        for (const cat of catArr) {
            namesList += `<li>${cat.name}</li>`;
        }
        console.log(namesList);
        namesListContainer.innerHTML = namesList;
    },
    renderCat: function(theCat){
        document.querySelector('#kittehPic').src = "img/" + theCat.imageName;
        document.querySelector('#kittehName1').innerHTML = `${theCat.name} has been clicked ${theCat.clicks} times`;

    }

};

octopus.init();


// Increment the value only when an image is clicked
theKittehs.addEventListener('click', function(e){
       
    if (e.target.tagName === "LI"){ 
        // loop through cats and see if the event's src element contains cat's the filename
        // if it does increment the count and update the display
        let cats = model.getCats();
        
        for (let i = 0; i < cats.length; i++){
            if(e.target.innerHTML.includes(cats[i].name) === true) {
                cats[i].clicks += 1;   
                view.renderCat(cats[i]);         
                
            } else {
                
            }
        }
    
    }

});