
document.addEventListener("DOMContentLoaded", function () {

    // Get references to the select element, image element, and price element

    // Processor category
    var cpuSelector = document.getElementById("cpulist");
    var cpuImage = document.getElementById("cpuimg");
    var cpuSpecs = document.getElementById("cpuspecs");
    var cpuPrice = document.getElementById("cpuprice");

    // Update the elements for the Processor category

    // Add an event listener to the select element
    cpuSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        // Get the selected option
        var selectedOption = cpuSelector.options[cpuSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        cpuImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        cpuPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        cpuSpecs.textContent = selectedSpecs;


    });

    // Fan category
    var fanSelector = document.getElementById("fanlist");
    var fanImage = document.getElementById("fanimg");
    var fanSpecs = document.getElementById("fanspecs");
    var fanPrice = document.getElementById("fanprice");

    fanSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = fanSelector.options[fanSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        fanImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        fanPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        fanSpecs.textContent = selectedSpecs;


    });


    // Case category
    var caseSelector = document.getElementById("caselist");
    var caseImage = document.getElementById("caseimg");
    var caseSpecs = document.getElementById("casespecs");
    var casePrice = document.getElementById("caseprice");

    caseSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = caseSelector.options[caseSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        caseImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        casePrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        caseSpecs.textContent = selectedSpecs;


    });

    // RAM category
    var ramSelector = document.getElementById("ramlist");
    var ramImage = document.getElementById("ramimg");
    var ramSpecs = document.getElementById("ramspecs");
    var ramPrice = document.getElementById("ramprice");

    ramSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = ramSelector.options[ramSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        ramImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        ramPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        ramSpecs.textContent = selectedSpecs;


    });

    // Storage Category
    var ssdSelector = document.getElementById("ssdlist");
    var ssdImage = document.getElementById("ssdimg");
    var ssdSpecs = document.getElementById("ssdspecs");
    var ssdPrice = document.getElementById("ssdprice");

    ssdSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = ssdSelector.options[ssdSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        ssdImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        ssdPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        ssdSpecs.textContent = selectedSpecs;


    });

    // Power Category
    var powSelector = document.getElementById("powlist");
    var powImage = document.getElementById("powimg");
    var powSpecs = document.getElementById("powspecs");
    var powPrice = document.getElementById("powprice");

    powSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = powSelector.options[powSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        powImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        powPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        powSpecs.textContent = selectedSpecs;


    });

    // GPU Category
    var gpuSelector = document.getElementById("gpulist");
    var gpuImage = document.getElementById("gpuimg");
    var gpuSpecs = document.getElementById("gpuspecs");
    var gpuPrice = document.getElementById("gpuprice");

    gpuSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = gpuSelector.options[gpuSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        gpuImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        gpuPrice.textContent = selectedPrice;
        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        gpuSpecs.textContent = selectedSpecs;


    });

    // Motherboard Category
    var boardSelector = document.getElementById("boardlist");
    var boardImage = document.getElementById("boardimg");
    var boardSpecs = document.getElementById("boardspecs");
    var boardPrice = document.getElementById("boardprice");

    boardSelector.addEventListener("change", function () {
        console.log("Change event triggered");
        var selectedOption = boardSelector.options[boardSelector.selectedIndex];

        // Update the image source
        var selectedImage = selectedOption.getAttribute("data-img");
        boardImage.src = selectedImage;
        // Update the price
        var selectedPrice = selectedOption.getAttribute("data-pri");
        boardPrice.textContent = selectedPrice;

        // Update the specifications
        var selectedSpecs = selectedOption.getAttribute("data-desc");
        boardSpecs.textContent = selectedSpecs;

    });
});



