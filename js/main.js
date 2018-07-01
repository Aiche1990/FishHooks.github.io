let mNav = document.getElementsByClassName('mobile-nav')[0];
let slider = document.getElementsByClassName('image-slider-1')[0];
let atNumber = document.getElementsByClassName('numbering')[0];

let links = [];
for(var i = 0; i<=3; i++)
{
    links[i] = document.getElementsByTagName('a')[i];
}

let isClicked;
let atIndex = 1;

function activeHome()
{
    links[1].classList.remove('active');
    links[0].classList.add('active');
    links[2].classList.remove('active');
    links[3].classList.remove('active');
}   

function activeBlog()
{
    links[0].classList.remove('active');
    links[1].classList.add('active');
    links[2].classList.remove('active');
    links[3].classList.remove('active');
}   

function activeExplore()
{
    links[0].classList.remove('active');
    links[2].classList.add('active');
    links[1].classList.remove('active');
    links[3].classList.remove('active');
}  


function activeContact()
{
    links[0].classList.remove('active');
    links[3].classList.add('active');
    links[1].classList.remove('active');
    links[2].classList.remove('active');
}  

function toggleMobileNav()
{
    if(!isClicked)
    {
        mNav.style.transform = "scale(1)";
        isClicked = true;
    }
    else if(isClicked)
    {
        mNav.style.transform = "scale(0)";
        isClicked = false;
    }
}


function nextImage()
{
    if(atIndex == 1)
    {
        console.log("next image !");
        slider.classList.remove('image-slider-1')
        slider.classList.add('image-slider-2');
        atNumber.innerHTML = "02";
        atIndex = 2;
    }
    else if(atIndex == 2)
    {
        console.log("next image !");
        slider.classList.remove('image-slider-2')
        slider.classList.add('image-slider-3');
        atNumber.innerHTML = "03";
        atIndex = 3
    }
    else if(atIndex == 3)
    {
        console.log("next image !");
        slider.classList.remove('image-slider-3')
        slider.classList.add('image-slider-1');
        atNumber.innerHTML = "01";
        atIndex = 1;
    }
}