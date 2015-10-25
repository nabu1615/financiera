$(function() {
	var top = $(".border-top"),
		right = $(".border-right"),
		bottom = $(".border-bottom"),
		left = $(".border-left");
	TweenLite.to(top, 1.5, {width: "100%"});
	TweenLite.to(right, 1.5, {height: "100%"});
	TweenLite.to(bottom, 1.5, {width: "100%"});
	TweenLite.to(left, 1.5, {height: "100%"});
});


// Game 1

$(document).ready(function() {

    // Tooltip Options

    $('.tooltip').tooltipster({
        trigger: 'click',
        position: "bottom",
        multiple: true,
        onlyOne : true
    });

    // Disable tooltip after firing

    $('.box-tool').on("click", function(){
        $(this).find(".disable-tool").addClass("active");
    });

    // Start game 1

    $('#startBtn').click(function(e){
        e.preventDefault();
    	$('#stage01').css({
    	// 	"transform": "scale(.5)",
  			// "transition": "transform 500ms"
    	})
    	$('#stage01').animate({
    		left: "-=100%",
    		opacity: "0"
    	},800)
    	$('#stage02').animate({
    		left: "-=100%",
    		opacity: "1"
    	},800)
    })
    $('#nextBtn').click(function(e){
        e.preventDefault();
    	$('#stage02').css({
    	// 	"transform": "scale(.5)",
  			// "transition": "transform 500ms"
    		// left: "-=100%",
    		// opacity: "0"
    	})
    	$('#stage02').animate({
    		left: "-=100%",
    		opacity: "0"
    	},800)
    	$('#stage03').animate({
    		left: "-=100%",
    		opacity: "1"
    	},800, function(){
    		$('#stage03 .a-jugar').animate({
    			marginTop: "450px"
    		})
    		$('#stage03 .stars-footer').animate({
    			opacity: "1"
    		})
    	})
    	setTimeout(function(e){
	    	$('#stage03').animate({
	    		left: "-=100%",
	    		opacity: "0"
	    	},800)
	    	$('#stage04').animate({
	    		left: "-=100%",
	    		opacity: "1"
	    	},800)
    	},800+2000)
    })
    $('#answerBtn').click(function(e){
        e.preventDefault();
    	$('#stage04').css({
    	// 	"transform": "scale(.5)",
  			// "transition": "transform 500ms"
    	})
    	$('#stage04').animate({
    		left: "-=100%",
    		opacity: "0"
    	},800)
    	$('#stage05').animate({
    		left: "-=100%",
    		opacity: "1"
    	},800)
    })
});

$(document).ready(function($){
    $("#nextBtn").hover(
	  function () { $(this).addClass('animated bounce infinite');}, 
	  function () { $(this).removeClass('animated bounce infinite');}
	  );
    $("#homeBtn").hover(
	  function () { $(this).addClass('animated bounce infinite');}, 
	  function () { $(this).removeClass('animated bounce infinite');}
	  );
    $("#retryBtn").hover(
	  function () { $(this).addClass('animated bounce infinite');}, 
	  function () { $(this).removeClass('animated bounce infinite');}
	  );
});

// Fin Game 1

// Game 2


$(document).ready(function() {
        $(".start-game2").click(function(e){
            e.preventDefault();
        $('#stage001').css({
        //  "transform": "scale(.5)",
            // "transition": "transform 500ms"
            // left: "-=100%",
            // opacity: "0"
        })
        $('#stage001').animate({
            left: "-=100%",
            opacity: "0"
        },800)
        $('#stage002').animate({
            left: "-=100%",
            opacity: "1"
        },800)
        $(".start-game2").hide();
    });
    $('#playConceptos').click(function(e){
        e.preventDefault();
        $('#stage002').css({
        //  "transform": "scale(.5)",
            // "transition": "transform 500ms"
            // left: "-=100%",
            // opacity: "0"
        })
        $('#stage002').animate({
            left: "-=100%",
            opacity: "0"
        },800)
        $('#stage003').animate({
            left: "-=100%",
            opacity: "1"
        },800)
        setTimeout(function(e){
            $('#stage003').animate({
                left: "-=100%",
                opacity: "0"
            },800)
            $('#stage004').animate({
                left: "-=100%",
                opacity: "1"
            },800)
        },800+2000)
    })
    $('#answerBtn').click(function(e){
        e.preventDefault();
        $('#stage04').css({
        })
        $('#stage04').animate({
            left: "-=100%",
            opacity: "0"
        },800)
        $('#stage05').animate({
            left: "-=100%",
            opacity: "1"
        },800)
    })
});