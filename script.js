const form = document.querySelector("#userform");
const table = document.getElementById('table');
let arr = [];
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    //taking values
    const fname = document.getElementById('fname').value.trim()
    const lname = document.getElementById('lname').value.trim()
    const father = document.getElementById('father').value.trim()
    const gender = document.querySelector('input[name="gender"]:checked')?.id || '';

    //create a object and push to array
    const userdata = {
        firstname: fname,
        lastname: lname,
        fathername: father,
        gender: gender
    };

    localStorage.setItem('person', JSON.stringify(userdata));

    //getting inputs
    const get = JSON.parse(localStorage.getItem("person"));
    console.log(get);

    //pushing all the inputs in a arr so that arr can be defined in the table
    arr.push(get);
    console.log(arr);

    form.reset();
    table.innerHTML = `
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Father's name</th>
        <th>Gender</th>
        <th>Action</th>
      </tr>`;

    arr.map((item) => {

        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const tdDel = document.createElement('td');
        const delBtn = document.createElement('button');


        td.textContent = item.firstname;
        td1.textContent = item.lastname;
        td2.textContent = item.fathername;
        td3.textContent = item.gender;
        delBtn.textContent = "Delete";

        delBtn.addEventListener('click', () => {
            tr.remove(); // Just remove this table row
        });


        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(tdDel);
        tdDel.appendChild(delBtn);

        table.appendChild(tr);

    })

})