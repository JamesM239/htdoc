var UserInput;

function Generate(UsePrompt)
{
    if(UsePrompt)
    {
        while(isNaN(UserInput) || UsePrompt < 1 || UsePrompt > 7)
        {
            UserInput = parseInt(window.prompt("Please enter numbers required: {1-7}"), 10);
        } 
    }
    
    let b = [];
        for (let i = 0; i < UserInput; i++) {
            b.push(Math.floor(Math.random() * 99 + 1));
        }
    
    let c = "";
        for (let i = 0; i < b.length; i++) {
            let element = b[i];
            c = c + element;
            if(i != b.length - 1)
            {
                c = c + "-"
            }
        }
    return c;
}

document.getElementById('GeneratorOutput').innerHTML = Generate(true);

function OnClick()
{
    document.getElementById('GeneratorOutput').innerHTML = Generate(false);
}