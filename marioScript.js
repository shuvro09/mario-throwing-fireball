
var canvas = document.getElementById("myCanvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var c = canvas.getContext("2d")
console.log(canvas)
var img = new Image()
img.src = "images/fireball.png"
x = 0
a = canvas.width * 0.1
b = canvas.height * 0.77
console.log(a)
document.getElementById("img-mario").onclick = function () {
    x = 0

    console.log("successfull");
    document.getElementById('img-mario').style.pointerEvents = 'none';
    c.drawImage(img, a, b, 100, 100)
    animate()
}
dx = 5
function animate() {

    if (a + x < canvas.width) {
        requestAnimationFrame(animate)
        //c.fillStyle = 'rgba(86,142,187,0.5)'
        //c.fillRect(0, 0, canvas.width, canvas.height)
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(img, a + x, b, 100, 100)
        x = x + dx


    }
    else {
        c.clearRect(0, 0, canvas.width, canvas.height)
        document.getElementById('img-mario').style.pointerEvents = 'all';
    }

}
