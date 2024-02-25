    // $("h1").css("color", "red"); //same as document.querySelectorAll()

    $("h1").click(function(){
        $("h1").css("color", "orange")
    })

    $(".color-red").click(function(){
        $("h1").css("color", "red")
    })

    $(".color-blue").click(function() {
        $("h2").css("color", "blue");
    })

    $(".before").click(function(){
        $("h1").before("<button class='new'>before</button>")
    })

    $(".after").click(function(){
        $("h2").append("<button class='new'>after</button>")
    })

    $(".remove").click(function(){
        $(".new").remove()
    })

    $(".type").click(function(){
        $(document).keypress(function(event) {
            $("h1").text(event.key);
        })
    })

    // $("input").keypress(function(event) {
    //     $("h1").text(event.key)
    // })

    $(".change").click(function() {
        // var text = $("input").html();
        $("h1").text($("input").val());

        // $("h1").text("me");
    })
  
    $("h2").on("mouseover", function(){
        $("h2").css("color", "cyan")
    })

    $(".hide").on("click", function(){
        $("h1").fadeToggle()
    })

    $(".slide").on("click", function(){
        $("h1").slideToggle()
    })

    $(".animate").on("click", function(){
        $("h1").slideUp().slideDown().animate({
           opacity:0.5 
        })
    })


