const con1 = $('.container-1')

const liTo = $(".button-li")

liTo.on("click", function (e) {
    var getVal = $(this).attr("value");
    if (getVal == "books") {
        if ($(".container-1").hasClass("display-this")) {
            $(".container-1").removeClass("display-this")
        } else {
            $(".container-1").addClass("display-this")
        }
    }
    else if (getVal == "Borrowers") {
        $(".container-1").removeClass("display-this")
    }
    else if (getVal == "Book-Entry") {
        $(".container-1").removeClass("display-this")
    }
    else if (getVal == "Contact") {
        $(".container-1").removeClass("display-this")
    }
    else if (getVal == "Book-List") {
        $(".container-1").removeClass("display-this")
    }
    else if (getVal == "dashboard") {
        $(".container-1").removeClass("display-this")
    }
})