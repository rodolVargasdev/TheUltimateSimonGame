$(".button-start").on("click", function()
{
    $(".button-start").animate({opacity: 0.5});
    let flag = true;    
    var buttonSimonSelect;   
    var numRandom;
    var patternNumbers = []; 
    for(let i = 0; i < 10; i++)
    {
        numRandom =  Math.ceil(Math.random() * 4);
        patternNumbers[i] = numRandom;
        console.log( numRandom);
    }

    console.log( patternNumbers );
    
    // for(let i = 0; i < 10; i++)
    // {
    //     buttonSimonSelect = ".simon-" + patternNumbers[i];
    //     console.log(buttonSimonSelect);
    //     $(buttonSimonSelect).animate({opacity: 0.5});    
    //     $(buttonSimonSelect).animate({opacity: 0.5});     
    //     $(buttonSimonSelect).animate({opacity: 1});      
    //     $(buttonSimonSelect).animate({opacity: 1});       
    // }
});

$(".simon-1").on("click", clickPulsado);
async function clickPulsado() {
    await new Promise((resolve) =>
                      setTimeout(resolve, 3000))
    alert('clicked')
  }
    

