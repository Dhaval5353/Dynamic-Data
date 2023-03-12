const jsonData = {
  products: [
    { id: 1, name: "samidh", college: "Silveroak", gender:"male" },
    { id: 2, name: "dhaval", college: "Silveroak", gender:"male" },
    { id: 3, name: "ashish", college: "V.G.E.C", gender:"male" },
    { id: 4, name: "vasu", college: "G.I.T", gender:"male" },
    { id: 5, name: "dhruvi", college: "Saffrony", gender:"female" },
    { id: 6, name: "deep", college: "Saffrony", gender:"male" },
    { id: 7, name: "hemant", college: "AIT", gender:"male" },
    { id: 8, name: "jeel", college: "G.I.T", gender:"female" },
    { id: 9, name: "vinit", college: "G.I.T", gender:"male" },
  ],
};

function getProduct() {
  let table = `<div class="row">
      <div class="col text-center">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">College</th>
                  <th scope="col">Gender</th>
                  <th scope="col"></th>
                </tr>
              </thead>`;

    

  for (let i of jsonData.products) {
    table += `<tr>
                <th scope="row">${i.id}</th>
                <td>${i.name}</td>
                <td>${i.college}</td>
                <td>${i.gender}</td>
                <td><button type="button" class="btn btn-primary" onclick="deleteData()">Delete</button></td>
              </tr>`;
  }

    table += `</table>
        </div>
      </div>`;
    document.getElementById("newAddedData").innerHTML = table;
}

function addData(){

    const sId = document.getElementById('id').value;
    const sName = document.getElementById('name').value;
    const sCollege = document.getElementById('college').value;
    const sGender = document.querySelector('input[name="gender"]:checked').value;

    jsonData.products.push({"id": sId, "name": sName, "college": sCollege, "gender":sGender})
    console.log(jsonData.products);
    getProduct();
}