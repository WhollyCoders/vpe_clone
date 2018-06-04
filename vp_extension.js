// Select Output Element
    defaultOutputText       = "Welcome WhollyCoder...";
    outputElement           = document.getElementById("output");
    outputElement.innerHTML = defaultOutputText;

// Create Function to Hide Output Element
    function hideOutputElement(){
        outputElement.style.visibility = "hidden";
    }

// Create Function to Display ViewPort Dimensions (displayVPDim)
    function displayVPDim(){
      // Display Output Element
      outputElement.style.visibility = "visible";

      // Initialize Variables
      // innerWidth(iw), innerHeight(ih), outerWidth(ow), outerHeight(oh)
      iw = window.innerWidth;
      ih = window.innerHeight;
      ow = window.outerWidth;
      oh = window.outerHeight;

      // Generate Output String
      outputText = "Inner: "+iw+" x "+ih+"<br>";
      outputText += "Outer: "+ow+" x "+oh+"<br>";

      // Display Output
      outputElement.innerHTML = outputText;

      // Set Timeout to Hide Output Element
      setTimeout(hideOutputElement, 10000);
    }

// Event Listener for Window Resize
window.addEventListener("resize", displayVPDim);
