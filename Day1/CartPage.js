// Cart Page
let data = JSON.parse(sessionStorage.getItem("data"));
      let totalAmount = 0;

      if (data.length > 0) {
        data.map((val) => {
          let cart = document.getElementById("cart");
          let card = document.createElement("div");
          let image=document.createElement("img")
          let h1 = document.createElement("h1");
          let h2 = document.createElement("h2");
          let dis = document.createElement("span");

          card.className = "card";

          image.src=val.image
          h1.innerHTML = val.name;
          h2.innerHTML = "Rs." + val.cost;
          dis.innerHTML = `Discount: ${val.discount * 100}%`;

          totalAmount += val.cost - val.cost * val.discount;
          console.log(totalAmount);

          card.append(image,h1, h2, dis);
          cart.appendChild(card);
        });

        let total = document.getElementById("total");
        let h3 = document.createElement("h3");
        let btn = document.createElement("button");

        h3.innerHTML = `Total Price: Rs.${totalAmount}`;
        btn.innerHTML = "BUY";
        btn.addEventListener("click", function () {
          alert(`Total Price: Rs.${totalAmount}`);
        });

        total.append(h3, btn);
      } else {
        document.getElementById("cart").innerHTML = "Your Cart is Empty";
      }