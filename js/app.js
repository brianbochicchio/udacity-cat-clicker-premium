// Cat Clicker Premiun Octopus Edition

   /*  BIG TODO
    *  Convert the project to the MVO pattern
    *  
    * Script: 
    * Reorganize and refactor the code
    * Add the image swapping to the view
    * Setup proper defaults via inits
    * 
    *  HTML:
    *  Improve display
    */


// This is my data
var model = {

        init: function(){
        let theKittehs = document.querySelector('#theKittehs');
        let clickCountDisplay = document.querySelector('#count');
        let clickCount = 0;
  
        let kittehName1 = document.querySelector('#kittehName1');
        let kittehName2 = document.querySelector('#kittehName2');
        view.renderCatList(this.cats);        
    },
    getCats: function(){
        return this.cats;
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

};

// This is the user view
var view = {

    renderCatList: function(catArr){
        let namesList = "";
        let namesListContainer =  document.querySelector('#theKittehs');
        console.log(catArr);   
    
        for (const cat of catArr) {
            namesList += `<li>${cat.name}</li>`;
        }
        console.log(namesList);
        namesListContainer.innerHTML = namesList;
    },
    renderCat: function(){

    }

};

model.init();





// Increment the value only when an image is clicked
theKittehs.addEventListener('click', function(e){
    
    
    if (e.target.tagName === "LI"){ 
        // loop through cats and see if the event's src element contains cat's the filename
        // if it does increment the count and update the display
        let cats = model.getCats();
        
        for (let i = 0; i < cats.length; i++){
            console.log(cats[i].imageName);
            if(e.target.innerHTML.includes(cats[i].name) === true) {
                cats[i].clicks += 1;             
                document.querySelector('#kittehPic').src = "img/" + cats[i].imageName;
                document.querySelector('#kittehName1').innerHTML = `${cats[i].name} has been clicked ${cats[i].clicks} times`;
            } else {
                
            }
        }
    
    }

});