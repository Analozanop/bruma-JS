function ShoppingCart() {
    var cart = [];
    this.populate = function(){
        cart = this.get ()

    }
    this.add = function (producto){
        cart.push(producto);
        var cartString = JSON.stringify(cart)
        localStorage.setProducto ('data', cartString)
    }
    this.get = function(){
        var data = localStorage.getItem('data')
        return JSON.parse(data)
    }
}