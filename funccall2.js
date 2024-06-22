function Box(width,height) {                          //call function is used for inheritance
    this.height = height;
    this.width = width;
}

function Widget(width,height,color) {
    Box.call(this,width,height)
    this.color = color;
}
let widget = new Widget(100,200,'red');
console.log(widget);