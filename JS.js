$(document).ready(function(){
  $(document).on('keydown', function(e) {
    var key = e.key;
    var display = $('#display');
    var currentValue = display.val();
    
    if (key.match(/[0-9.]/)) {
      display.val(currentValue + key); // Append digit to the display
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      display.val(currentValue + key); // Append operator with spaces
    } else if (key === 'Backspace') {
      e.preventDefault();
      display.val(currentValue.slice(0, -1)); // Remove the last character
    } else if (key === 'Escape') {
      display.val(''); // Clear the display when Escape key is pressed
    }
  });

  $(".clc").click(function(){
    $("#display").val($("#display").val() +$(this).val());
  });

  $('.clear').click(function() {
      var value = $("#display").val();
      $("#display").val(value.substr(0, value.length - 1));
  });

  $(".allclear").click(function(){
    $("#display").val('');
  }); 

  $(".result").click(function(){
    data=$('#display').val();
    var arithmeticRegex = /[+\-*/]/;
    var numRegex = /^[0-9]+$/;
    var dotRegex = /\./;

    if (arithmeticRegex.test(data)) {
      var combinedNumber1;
      var combinedNumber2;
      var art_optr = data.match(arithmeticRegex);
      operator=data.split(arithmeticRegex); 
      num1 = operator[0];
      num2 = operator[1];
      if( numRegex.test(num1) && numRegex.test(num2))
      {
        $("#display").val(eval($("#display").val()));
      } 
      else{
      if (dotRegex.test(num1) || dotRegex.test(num2))
      {
        decimal=operator[0].split(dotRegex);
          join=decimal[1]+decimal[2];
          combinedNumber1 = parseFloat(decimal[0].toString() + '.' + join.toString());
          print_result(); 
      }
      else (numRegex.test(num1) && dotRegex.test(num2))
      {
        decimal=operator[0].split(dotRegex);
        decimal[2]=0;
          decimal=operator[1].split(dotRegex);
          join=decimal[1]+decimal[2];
          combinedNumber2 = parseFloat(decimal[0].toString() + '.' + join.toString());
            print_result();
      }
    }

    if ( dotRegex.test(num1) && dotRegex.test(num2))
      {
        if( dotRegex.test(operator[0]))
        {
          decimal=operator[0].split(dotRegex);
          join=decimal[1]+decimal[2];
          combinedNumber1 = parseFloat(decimal[0].toString() + '.' + join.toString());
          print_result();      
        }
        else( dotRegex.test(operator[1]))
        {
          decimal[2]=0;
          decimal=operator[1].split(dotRegex);
          join=decimal[1]+decimal[2];
          combinedNumber2 = parseFloat(decimal[0].toString() + '.' + join.toString());
          print_result();  
        } 
      }


      //PRINTING FUNCTION
      function print_result(){
        if ( art_optr == '+')
        {
          rslt= parseFloat(combinedNumber1) + parseFloat(combinedNumber2);
          $("#display").val(rslt);
        }  
        else if ( art_optr == '-')
        {
          rslt= parseFloat(combinedNumber1) - parseFloat(combinedNumber2);
          $("#display").val(rslt);
        }
        else if ( art_optr == '*')
        {
          rslt= parseFloat(combinedNumber1) * parseFloat(combinedNumber2);
          $("#display").val(rslt);
        }
        else if( art_optr == '/')
        {
          rslt= parseFloat(combinedNumber1) / parseFloat(combinedNumber2);
          $("#display").val(rslt);
        }
      } 
    }
  });
});



