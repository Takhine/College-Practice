// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Submit";
      if (name==="Math")
      {
        var message="<h2>Marks in Math: " + name + "!</h2>";
      }
      var name =
       document.getElementById("name").value;
       var message = "<h2>Marks: " + name + "!</h2>";
    }
      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "Math") {
        var h1 = 
          document
            .querySelector("#h1")
            .textContent;
        name += " marks in Math";
        document
            .querySelector("h1")
            .textContent = h1;
      }
        if (name === "English") {
        var h1 = 
          document
            .querySelector("#h1")
            .textContent;
        name += " marks in English";
        document
            .querySelector("h1")
            .textContent = h1;
        }
        if (name === "Science") {
        var h1 = 
          document
            .querySelector("#h1")
            .textContent;
        name += " marks in Science";
        document
            .querySelector("h1")
            .textContent = h1;
        }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

    document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);



// document.querySelector("button")
//   .onclick = sayHello;
