


function userInput(value)
{
    const display = document.getElementById('output');
    
    display.value += value;
}

function calculate()
{
     const display = document.getElementById('output');
     try
    {
        display.value = eval(display.value);
    }
    
     catch (error)
    {
      
        display.value = 'Synt error';
    }
}

function clearDisplay()
{
    const display = document.getElementById('output');
    
    display.value = '';
}


