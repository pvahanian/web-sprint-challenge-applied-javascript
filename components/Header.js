// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
        //Declare variables and gave them element values
        const header = document.createElement('div');
        header.classList.add('header')
        
        const span =document.createElement('span')
        span.classList.add('date') 
        span.textContent = "MARCH 28, 2020"
        
        const h1 =document.createElement('h1')
        h1.textContent= "Lambda Times"

        const tempSpan =document.createElement('span')
        tempSpan.classList.add('temp') 
        tempSpan.textContent="98°"

        const headerContainer = document.querySelector('.header-container')
        
        headerContainer.append(header)
        header.append(span)
        header.append(h1)
        header.append(tempSpan)

        return null;
    
}

Header();
