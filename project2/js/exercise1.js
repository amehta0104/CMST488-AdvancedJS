$(function () {
    /* Selectors */
    $("#add-classes").click(function () {
        $('.selector-examples li:first').addClass('first');
        // Add remaining selectors here
       
        $('.selector-examples li:nth-child(odd)').addClass('odd');
       $('.selector-examples li:nth-child(even)').addClass('even');
       $('.selector-examples li:last').addClass('last');
       $('.selector-examples li:nth-child(4),li:nth-child(5)').addClass('highlighter');
    })

    /* Change Text */
    $("#change-language").click(function () {
        // Step 1: Create a new variable called inputValue and set it to the value of the #newLanguage id
    
       inputValue = $('#newLanguage').val();
       console.log(inputValue);

        // Step 2: Create a new variable called element and set it to the value of the .currentLanguage class

        let element = $('.currentLanguage').html();
         console.log(typeof(element));

        // Step 4: Using .html (http://api.jquery.com/html/), update element with inputValue

       $(".currentLanguage").html(inputValue);

    });

    /* Toggles Part 1: Modifying CSS attributes with .css() */
    var boxColor = "rgb(153, 51, 51)"

    $("#button_toggle_colors").click(function() {
        /* Your code goes here */
        $(".box").each(function () {

            if ($(this).css('background-color') == boxColor) {
                // element currently has a color
                // remove it
                $(this).css('background-color', '');
            }
            else {
                // element currently has no background color
                // add it
                $(this).css('background-color', boxColor);
            }
        });
    });

    /* Toggles Part 2: Adding/Removing classes to manipulate shapes */
    $("#button_toggle_roundedges").click(function() {
        $(".box").each(function () {
            // Add a toggleClass using $(this) to add the class 'round-edge'
            $(this).toggleClass('round-edge');
        });
    });

    /* Toggles Part 3: Adding new elements */
    $("#button_add_box").click(function() {
        n = $('#boxes').children().length + 1;
        console.log(n);
        /* Your code goes here  */

        //create div element each time button is clicked 
        $("<div/>",{
        // scalable id naming for each additional box
        'id': 'box' + n,
        'class' : 'box outlined',

        } ).appendTo('#boxes');
       
         

    });
});
