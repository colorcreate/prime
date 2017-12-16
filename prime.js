$(document).ready(function() {
    //hide div "result" at the beginning and when div "input number" is clicked
    $("#result").hide();
    $("#number").click(function() {
        $("#result").hide();
    });



    //start the program when Enter is pressed
    $("#number").keypress(function(event) {
        if (event.keyCode == 13) {
            all();
        }
    });


    //start the program when div "tes Enter" is clicked
    $("#tes").click(function() {
        // alert($("#number").val());
        all();

    });


    //main function
    function all() {
        var number = $("#number").val().replace(/,/g, ".");
        $("#result").show();
        if (parseInt(number) != number) {
            $("#result").text("It's not Integer!");
        } else {
            var result = prime(parseInt(number));


            if (result == 0) {
                result = composite(parseInt(number));
            } else {
                result = "It's Prime Number";
            }
            $("#result").text(result);
        }
    }

    //cek prime first, and if it's not prime, the number is thrown into composite fuction
    function prime(a) {
        var b = 0;

        if (a == 2) {
            var result = 1;
        } else if (a % 2 == 0 || a == 1 || a <= 0) {
            var result = 0;
        } else {
            for (var i = 3; i < a; i++) {
                if (a % i == 0) {
                    b++;
                }
            }
            if (b == 0) var result = 1;
            else var result = 0;
        }

        return result;
    }

    function composite(number) {
        var a = parseInt($("#number").val().replace(/,/g, "."));
        if (a == 1) {
            return "It's Composite Number";
        } else if (a <= 0) {
            return "It's not Integer!"
        } else {
            var result = [];

            var n = number;
            for (var i = 2; i < number; i++) {

                if (n % i == 0) {
                    result.push(i);
                    // alert(i + " "+n + "-");
                }
                while (n % i == 0) {
                    n /= i;
                    // alert("while");
                }
            }

            var a = "[ "
            for (var i = 0; i < result.length - 1; i++) {

                a = a + result[i] + ", ";
            }
            a = a + result[i] + " ]";
            return "It's Composite Number with set of prime factor is " + a;

        }


    };

    
});