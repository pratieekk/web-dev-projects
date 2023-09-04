let optionsButtons=document.querySelectorAll(".option-button")
let advanceOptionButton=document.querySelectorAll(".adv-option-button")
let fontName=document.getElementById("fontName")
let fontSizeRef=document.getElementById("fontSize")
let writingArea=document.getElementById("textinput")
let linkButton=document.getElementById("createlink")
let alignButtons=document.querySelectorAll(".align")
let spacingButton=document.querySelectorAll(".spacing")
let formatButton=document.querySelectorAll(".format")
let scriptButton=document.querySelectorAll(".script")

// font lists---

let fontList=["Aerial","Verdana","Times New Roman","Garamond","Courier New","cursive"]

//  initial setting for button highlighting

const initializer=()=>{

    highlighter(alignButtons, true)
    highlighter(spacingButton, true)
    highlighter(formatButton, false)
    highlighter(scriptButton, true)

    // create the drop down list for font name
    fontList.map((value)=>{
        let option=document.createElement("option")
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option)
    })
 
    // creating dropdown list for font size allow till 7 only
    for(let i=1; i<=10; i++){
        let option =document.createElement("option")
        option.value=i;
        option.innerHTML=i  
        fontSizeRef.appendChild(option)
    }

    // for default font size
    fontSizeRef.value =4;
}

// main logic for working on selected text

const modifyText=(command, defaultUI, value)=>{
    document.execCommand(command, defaultUI, value)
    // execCommand ---> worf and execute command on selected text
}

// for options that dont need value parameter
optionsButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id, false, null)
    })
})

// for option that require value parameter 
advanceOptionButton.forEach((button)=>{
    button.addEventListener("change", ()=>{
        modifyText(button.id, false, button.value)
    })
})

// for adding link 
linkButton.addEventListener("click", ()=>{
    let userlink = prompt("Enter a Url")

    // check if link has http if yes the pass directly or else we will add
    if(/http/i.test(userlink)){
        modifyText(linkButton.id, false, userlink)
    }
    else{
        userlink="http://"+userlink;
        modifyText(linkButton.id, false, userlink)
    }
})



// function for highlight button

const highlighter=(className, needsRemoval)=>{

    className.forEach((button)=>{
        button.addEventListener("click",()=>{
            //needsRemoval= true means only one button is highlighted other would be normal
            if(needsRemoval){
                let alreadyActive=false;

                // if currently clicked button is already active

                if(button.classList.contains("active")){
                    alreadyActive=true;
                    
                }

                // remove highlight from another button 
                highlighterRemover(className)
                    if(!alreadyActive){
                        // on clicking button will be highlighted
                        button.classList.add("active")
                        // console.log("yes")
                    }
            }
            else{
                //  to highlight other button

                button.classList.toggle("active")
            }
        })
    })
}

// function to remove the highlight


const highlighterRemover=(className)=>{
    className.forEach((button)=>{
        button.classList.remove("active")
    })
}




window.onload=initializer()