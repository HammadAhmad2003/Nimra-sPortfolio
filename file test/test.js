window.onscroll = function() {
    const header = document.querySelector("header");
    const title = document.querySelector(".title");
    
    if (window.scrollY > 50) {
        header.style.padding = "20px 0";
        title.style.fontSize = "2.5em";
    } else {
        header.style.padding = "40px 0";
        title.style.fontSize = "3em";
    }
};
