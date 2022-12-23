document.addEventListener("DOMContentLoaded", function()
{
    let navDisplayed = false;
    let navItems = document.querySelector("#mobile-nav-items");
    let toggle = document.querySelector("#nav-toggle-icon");
    
    toggle.addEventListener('click', function()
    {
        if(navDisplayed == true)
        {
            navItems.style.display = "none ";
            navDisplayed = false;
        }
        else
        {
            navItems.style.display = "flex";
            navDisplayed = true;
        }
    })
})
