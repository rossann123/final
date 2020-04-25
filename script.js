var app = new Vue({
  el: "#app",
  data:{
    items:[
      {
        Name: "Guitar",
        Type: "String",
        Brand: "Fender",
        Price: "$400.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXB1CjfETa5BmKJ3cH0biho9Xe1tQzNKesCEgXndKatqxWGZIe&usqp=CAU"
      },
      {
        Name: "Baritone",
        Type: "Brass",
        Brand: "Fender",
        Price: "$260.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_QXeKAiz7qrgvARGu_4LOPhwpshBx42RWbbStM_Y2m3DseUqY&usqp=CAU"
      },
      {
        Name: "Snare Drum",
        Type: "Percussion",
        Brand: "Fender",
        Price: "$180.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6s4Uw1T722Z_IZzlIZ-uqnQDwSXor4wbXViIGm1zE9spm7Qmq&usqp=CAU",
        popUp: false
      },
      {
        Name: "Keyboard",
        Type: "Percussion",
        Brand: "Yamaha",
        Price: "$340.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5ZljZYY5SiRZAagCtLw8PwJ9WTj58bgDNG69VlX3i-uR65Hrq&usqp=CAU",
        popUp: false
      },
      {
        Name: "Trombone",
        Type: "Brass",
        Brand: "Yamaha",
        Price: "$220.00",
        img:"https://cdn.shopify.com/s/files/1/0028/7712/products/ysl448g.jpg?v=1501869845",
        popUp: false
      },
      {
        Name: "Clarinet",
        Type: "Woodwind",
        Brand: "Yamaha",
        Price: "$130.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpjFgomaaRRcTqO7i1C09IYYBkOX-pVn9rOdXNYz2qVkWFi1RB&usqp=CAU",
        popUp: false
      },
      {
        Name: "Saxophone",
        Type: "Woodwind",
        Brand: "Maton",
        Price: "$360.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdWS0MLJ7uJrKfCtrjVSCcg_AQX75rStQEAUKrdwDrVFvrOmZx&usqp=CAU",
        popUp: false
      },
      {
        Name: "Xylophone",
        Type: "Percussion",
        Brand: "Maton",
        Price: "$490.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx7n9baR_M7JkiP0aUgm4Jw044IYBOBvNoJva8ZhKNOb4STjXT&usqp=CAU",
        popUp: false
      },
      {
        Name: "Marimba",
        Type: "Percussion",
        Brand: "Maton",
        Price: "$270.00",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIaC0G8le_pjqAcXeQ1yIwNC8iQK6w6Qz5T7-cbRzQvtwzZgYK&usqp=CAU",
        popUp: false
        
      }
    ],
    showPopUp:false,
    popUpItem:{},
    cart:[],
    showForm:false,
    newName:"",
    newType:"",
    newBrand:"",
    newCost:"",
    nameInput:"",
    typeInput:"",
    brandInput:"",
    costInput:"",
    noImage: "https://www.stickpng.com/assets/thumbs/584abf302912007028bd9335.png"
  },
  methods:{
    addToCart: function(index){
      this.cart.push(this.items[index]);
      this.items.splice(index, 1);
    },
    emptyCart:function(){
      this.items=this.items.concat(this.cart);
      this.cart=[];
    },
    displayForm:function(){
      this.showForm=!this.showForm;
    },
    addInstrument:function(){
      this.items.push({
        Name:this.nameInput,
        Type:this.typeInput,
        Cost:this.costInput,
        Brand:this.brandInput,
        noImage:true
      }),
      this.showForm=!this.showForm;
    },
    popUp:function(item){
      this.showPopUp=!this.showPopUp;
      this.popUpItem=item;
    }
  }
});