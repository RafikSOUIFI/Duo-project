var aler='The item has been added to the shopping cart'
var plants=[
{
   name: "Snake plant",
   source:"./img/Snake plant.jpg",
   info: "The snake plant is a carefree, resilient houseplant that makes a bold, architectural statement in your home with tall, swordlike leaves and unique variegation."
},
{
    name:"Four o'clock flower",
    source:"./img/Four o'clock flower.jpg",
    info: "Mirabilis jalapa, the marvel of Peru or four o'clock flower, is the most commonly grown ornamental species of Mirabilis plant, and is available in a range of colors (red, pink, blue ...)."
 },
 
 {
    name:"Bitter orange",
    source:"./img/Bitter orange.jpg",
    info: "Bitter orange, also known as Seville orange or sour orange, is a citrus fruit native to East Africa, the Arabian Peninsula, Syria, and Southeast Asia. This fruit is so sour that it's hard to eat by itself, but has been commonly used as the main ingredient in some marmalades."
 },
 {
    name:"Garden tulip",
    source:"./img/Garden tulip.jpg",
    info: "The tulip produces two or three thick bluish green leaves that are clustered at the base of the plant. The usually solitary bell-shaped flowers have three petals and three sepals."
 },
 
 {
    name:"Marijuana",
    source:"./img/Marijuana.jpg",
    info: "Marijuana refers to the dried leaves, flowers, stems, and seeds from the Cannabis sativa or Cannabis indica plant. The plant contains the mind-altering chemical THC and other related compounds. People use marijuana by smoking, eating, drinking, or inhaling it."
 },
 {
    name:"Indian shot",
    source:"./img/Indian shot.jpg",
    info: "Indian shot is a robust perennial herb up to 1m tall that grows from a thick, branching, underground rhizome. Leaves: Large green, broad leaves, which taper to a point. Flowers: Red or orange, usually yellow below, narrow with long petals."
 }
]

//------------------------------------------------------------------------------------------------------------------------
var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}

each(plants,function(e,i){
    $("#plantsId").append('<div id="a'+i+'" class="plantDiv"><img class="IMG" id="'+i+'" src="'+e.source+'"/><h4>'+e.name+'</h4></div>')
})

//Hover over the About div
$("#About").hover(function(){
    $('#plantsId').empty();
    $("#plantsId").before('<div class="AboutContact"><h2>About the store</h2><p>The Garden Store, established in 2023, is your destination for a diverse range of ornamental plants such as succulents, cactus, and bonsai trees. We pride ourselves in providing high-quality plants, carefully selected and nurtured for healthy growth and beauty. Our team is passionate about plants and dedicated to offering expert advice and tips for their care. Come and discover the beauty and joy of ornamental plants with us.</p></div>')
}, 
    function(){
        $('.AboutContact').empty();
        each(plants,function(e,i){
            $("#plantsId").append('<div class="plantDiv"><img class="IMG" id="'+i+'" src="'+e.source+'"/><h4>'+e.name+'</h4></div>')
        })
    });

    //Hover Over the Contact div
    $("#Contact").hover(function(){
        $('#plantsId').empty();
        $("#plantsId").before('<div class="AboutContact"><h2>Contact us through</h2><ul><li>email: contact@TheGardenStore.com</li><li>Landline: 71 523 856</li><li> Mobile phone : 95 372 716</li></ul></div>')
    }, 
        function(){
            $('.AboutContact').empty();
            each(plants,function(e,i){
                $("#plantsId").append('<div class="plantDiv"><img class="IMG" id="'+i+'" src="'+e.source+'"/><h4>'+e.name+'</h4></div>')
            })
        });


//The search button
$("#btn").click(function(e){
    var fd=filter(plants,function(e,i){
        return e.name===$(".find").val()|| $(".find").val()===""
    })
    $("#plantsId").empty()
    each(fd,function(e,i){
        $("#plantsId").append('<div class="plantDiv"><img class="IMG" id="'+i+'" src="'+e.source+'"/><h4>'+e.name+'</h4></div>')
        $("#plantsId").append('<div class="info"><h3>Some information about '+e.name+'</h3><p>'+e.info+'</p></div>')
        $(".plantDiv").css("height","70%")
        $(".plantDiv").css("width","70%")

    })
    $(".find").val('')
})

$(".active").click(function(){
    $("#plantsId").empty()
    each(plants,function(e,i){
        $("#plantsId").append('<div class="plantDiv"><img class="IMG" id="'+i+'" src="'+e.source+'"/><h4>'+e.name+'</h4></div>')
    })
})
$('.allPlantsDiv').on("click",function(e){
    console.log(e.target.id);
    var id =e.target.id
    var temp=`${"#"+id}`
    var temp2=`${"#a"+id}`
    console.log($(temp));
    if(e.target.tagName==="IMG"){
    $(temp).hide()
    var temp3=`${'Item added to cart!'}`
    $(temp2).append("<button class='BuyMoreInf' id='Buy' type='button' onclick='alert(\"Item added to cart!\")'>Buy</button>")
    $(temp2).append('<button class="BuyMoreInf" id="MoreInf" type="button">More Info</button>')
}
        if(e.target.tagName==="DIV"){
        $(".BuyMoreInf").hide()
        $($(e.target).children()[0]).show()
        }
})





/*$(".IMG").click(function(){
    var imgSrc=$(this).attr("src");
    window.open(imgSrc)
})*/



/*$(document).on("click",function(e){
    console.log(e.target.id)
 })*/

 
 $("#Buy").click(function(){
    alert('Item added to cart!')
})
 