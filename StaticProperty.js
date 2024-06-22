class item{
    static count = 0;
    static increament(){
        item.count++;
        console.log(this.count);
    }
}
console.log(item.count);
item.increament();