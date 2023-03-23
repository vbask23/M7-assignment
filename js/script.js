// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("form")
let selectedTable = document.querySelector("#employees")

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let x = document.getElementsByTagName("h2")
let countEmp = x[1]
let counting = document.querySelector("#empCount").value
counting = 0
document.addEventListener('submit', (e) => {
   e.preventDefault()
   counting = counting + 1
   let counter = document.createElement('output')
   let counterNum = document.createTextNode(counting)
   counter.appendChild(counterNum)
   countEmp.appendChild(counter)
})   

// ADD EMPLOYEE
const $=(id)=> document.getElementById(id)
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let name = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0)
    let cellName = row.insertCell(1)
    let cellExt = row.insertCell(2)
    let cellEmail = row.insertCell(3)
    let cellDept = row.insertCell(4)
    let deleteBtn = row.insertCell(5)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idTxt = document.createTextNode(id)
    let nameTxt = document.createTextNode(name)
    let extTxt = document.createTextNode(ext)
    let emailTxt = document.createTextNode(email)
    let deptTxt = document.createTextNode(dept)
   
    cellID.appendChild(idTxt)  
    cellName.appendChild(nameTxt) 
    cellExt.appendChild(extTxt) 
    cellEmail.appendChild(emailTxt)
    cellDept.appendChild(deptTxt)
 
    // CREATE THE DELETE BUTTON
    let deleteBtn1 = document.createElement('button')
    deleteBtn1.className = 'btn btn-danger btn-sm float-right'
    let textDelete = document.createTextNode("X")
    deleteBtn1.appendChild(textDelete)
    deleteBtn.appendChild(deleteBtn1)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
})

// DELETE EMPLOYEE
selectedTable.addEventListener('click', (e) => {
   e.preventDefault()
   if(confirm(`Are you sure you want to delete ?`)) {
      let z = e.target.parentNode.parentNode.rowIndex
      selectedTable.deleteRow(z)
   }
})


  