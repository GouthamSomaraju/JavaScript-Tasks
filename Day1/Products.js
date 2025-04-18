// Products Page
async function products() {
    let emp = [];
    let result = await fetch("http://localhost:3000/posts");
    let data = await result.json();

    data.map((val) => {
      let main = document.getElementById("main");
      let card = document.createElement("div");
      let image = document.createElement("img");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let dis = document.createElement("span");
      let btn = document.createElement("button");

      card.className = "card";

      image.src = val.image;
      h1.innerHTML = val.name;
      h2.innerHTML = "Price: ₹" + val.cost;
      dis.innerHTML = `Discount: ${val.discount * 100}%`;
      btn.innerHTML = "Add to Cart";

      btn.addEventListener("click", function () {
        emp.push(val);
        sessionStorage.setItem("data", JSON.stringify(emp));
      });

      card.append(image, h1, h2, dis, btn);
      main.appendChild(card);
    });
  }

  products();

  function cartBtn() {
    window.open("Cart.html", "_self");
  }