var buttonSimonSelect;   
var numRandom;
var patternNumbers = []; 
var flagPatternOn = false;
var flagContador = 1;
var index = 0;
var allowPressSimonButton = false;
console.log("Botones OFF");
var patronContainerClass = [];
var flag2 = 0;

$(".button-start").on("click", function()
{
    if(flagPatternOn === false)
    {
        selectingPattern();
    }   
});

$(".tryAgainButton").on("click", function()
{
    console.log("recibido")
    location.reload();
});


$(".tryAgain").on("click", function(){window.location.reload()});

function selectingPattern()
{
    $(".button-start").animate({opacity: 0.5});

    for(let i = 0; i < 5; i++)
    {
        numRandom =  Math.ceil(Math.random() * 4);
        patternNumbers[i] = numRandom;
        console.log( numRandom);
        patronContainerClass[i] = ".simon-" + numRandom;
    }
    console.log( patternNumbers );
    console.log( patronContainerClass );
    flagPatternOn = true;
    startPattern();
}

function startPattern()
{
    allowPressSimonButton = false;
    console.log("Botones OFF");
    timeBetween = 0;
    for(let i = -1; i < index; i++)
    {
        allowPressSimonButton = false;
        console.log("Botones OFF");
        console.log("Botones desactivados");
        $(".button-start").text("Getting Pattern");
        setTimeout(function()
        {
            allowPressSimonButton = false;
            console.log("Botones OFF");
            console.log("Botones desactivados");
            $(".button-start").text("Getting Pattern");
            buttonSimonSelect = "";
            buttonSimonSelect = ".simon-" + patternNumbers[i+1];
            $(buttonSimonSelect).delay(100).animate({opacity: 0.5});
            $(buttonSimonSelect).delay(100).animate({opacity: 1});
            console.log(buttonSimonSelect);  
        }, timeBetween+=1000);
        setTimeout(function()
        {
                allowPressSimonButton = true;
                console.log("Botones ON");
                $(".button-start").text("Your turn!");
                
        },timeBetween+1000)
    } 
    index++;
    
    console.log("NUMERO DE PATRÓN REALIZADO " + index);
    
}
        

$(".button-simon").on("click", function(event)
{
    if( allowPressSimonButton === true )
    {  
        console.log("test " + patronContainerClass[flagContador-1]);     
        console.log("."+event.target.classList[1]);
        
        console.log(patronContainerClass[index-1] + " XD");

        var buttonSelect = "." + event.target.classList[1];

        if(flagContador === index && buttonSelect === buttonSimonSelect) 
        {
            console.log("NUMERO DE PATRÓN REALIZADO " + index);
            if(index === 5)
            {
                allowPressSimonButton = false;
                console.log("Botones OFF");
                $(".button-simon").delay(100).animate({opacity: 1});
                $(".button-simon").attr("data-bs-toggle", "modal");
                $(".button-simon").attr("data-bs-target", "#exampleModal");
                $(".modal-title").text("WELL DONE");
                $("#exampleModal").attr("class", "modal face show");
                $("#exampleModal").attr("style", "display: block;");
                $("#exampleModal").attr("aria-modal", "true");
                $(".modal-body").text("CONGRATS! YOU GOT IT")
                // alert("BRAVO LO HAS CONSEGUIDO :D");
            }
            else
            {
                startPattern();
                console.log("Logró entrar");
                flagContador = 1;
                $(".button-simon").attr("data-bs-toggle", "modal");
                $(".button-simon").attr("data-bs-target", "#exampleModal");
                $(patronContainerClass[flagContador-1]).attr("data-bs-toggle", "none");
                $(patronContainerClass[flagContador-1]).attr("data-bs-target", "none");
            }
            
        }
        else
        {     
            if(buttonSelect === patronContainerClass[flagContador-1])
            {
                console.log(buttonSelect + " son iguales " + patronContainerClass[flagContador-1]);
                allowPressSimonButton = true;
                console.log("Botones ON");
                $(".button-start").text("Your turn!");
                flagContador++;
                $(".button-simon").attr("data-bs-toggle", "modal");
                $(".button-simon").attr("data-bs-target", "#exampleModal");
                $(patronContainerClass[flagContador-1]).attr("data-bs-toggle", "none");
                $(patronContainerClass[flagContador-1]).attr("data-bs-target", "none");
            }
            else
            {              
                console.log("error");
                $(".button-start").text("You failed:(");
                $(".button-simon").attr("data-bs-toggle", "modal");
                $(".button-simon").attr("data-bs-target", "#exampleModal");
                allowPressSimonButton = false;
                console.log("Botones OFF");
            }
        }
    }
    else
    {
        console.log("Botones no activados")
    }
})

$(".button-simon").click(function(buttonPressPatter)
{
    // if( allowPressSimonButton === true )
    // {
    console.log("."+buttonPressPatter.target.classList[1]);
    let botonSeleccionado = "."+buttonPressPatter.target.classList[1];
    $(botonSeleccionado).delay(1).animate({opacity: 0.5});
    $(botonSeleccionado).delay(1).animate({opacity: 1});
    // }
    // else
    // {
    //     console.log("Botones no activados")
    // }
});