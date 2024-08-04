// Fahrenheite Converter

function fahrenheite(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
      case 'F':
        temperature = inputDegreeValue;
        break;
      case 'C':
        temperature = eval((inputDegreeValue - 32) * (5 / 9));
        break;
      case 'K':
  
        temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
        break;
  
    }
    return temperature;
  }
// Celsius Converter
function celsius(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
  
      case 'C':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue * (9 / 5)) + 32);
        break;
      case 'K':
        temperature = eval(inputDegreeValue + 273.15);
        break;
  
    }
  
    return temperature;
  }
// Kelvin Converter

function kelvin(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
    
    switch (conversionDegreeType) {
      case 'K':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
        break;
      case 'C':
        temperature = eval((inputDegreeValue - 273.15));
        break;
    
    }
    return temperature;
    }
    

$('form').submit(function (event) {
    event.preventDefault(); // to prevent the default action
    convertInputDegree()
});

function convertInputDegree() {

    let inputDegree = parseInt($('#inputDegree').val());
    let selectInputDegreeType = $('#selectInputDegreeType1').val();
    let conversionType = $('#selectConversionType').val();
  console.log(inputDegree);
  console.log(selectInputDegreeType , conversionType);
    let resultValue = "";
  
    switch (selectInputDegreeType) {
  
      case "C":
        resultValue = celsius(inputDegree, conversionType);
        break;
  
      case "F":
        resultValue = fahrenheite(inputDegree, conversionType);
        break;
  
      case "K":
        resultValue = kelvin(inputDegree, conversionType);
        break;
  
    }
  
    // To prevent NaN
    if (isNaN(inputDegree)) {
      $('#convertedDegree').text('');
      return;
    }
  
    // To update the Degree Unit
    $('#convertedUnit').text(conversionType)
  
    // To update the Degree Value
    if (conversionType === selectInputDegreeType) {
  
      $('#convertedDegree').text(inputDegree);
    } else {
  
      return $('#convertedDegree').text(resultValue.toFixed(2));
  
    }
  
  }


$('#inputDegree').on('input', () => convertInputDegree());
$('#selectInputDegreeType1').change(() => convertInputDegree());
$('#selectConversionType').change(() => convertInputDegree());