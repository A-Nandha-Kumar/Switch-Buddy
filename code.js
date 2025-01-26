function s_off() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("text").textContent = "Switched Off";
    document.getElementById("off").style.background = "#22c55e";
    document.getElementById("on").style.background = "#cbd2d9";
}

function s_on() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("text").textContent = "Switched On";
    document.getElementById("on").style.background = "#22c55e";
    document.getElementById("off").style.background = "#cbd2d9";
}
