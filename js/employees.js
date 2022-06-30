firebase.auth().onAuthStateChanged((user)=>{
    if(user){

       


        //add income
        document.getElementById("addEmployee").onclick = function(){
            let fullName = document.getElementById("fullName").value;
            let nationalID = document.getElementById("nationalID").value;
            let department = document.getElementById("department").value;
            let salary = document.getElementById("salary").value;
            let phoneNo = document.getElementById("phoneNo").value;
            let employmentType = document.getElementById("employmentType").value;

            let addEmployee = firebase.firestore().collection("employees").doc();
            addEmployee.set({
                docId:addEmployee.id,
                fullName:fullName,
                nationalID:nationalID,
                department:department,
                salary:salary,
                phoneNo:phoneNo,
                employmentType:employmentType

            }).then(()=>{
                window.location.reload();
            })

        }

        //view employees
        firebase.firestore().collection("employees").get().then((querySnapshot)=>{
            let content = '';
            querySnapshot.forEach((doc)=>{

                let fullName = doc.data().fullName;
                let nationalID = doc.data().nationalID;
                let department = doc.data().department;
                let salary = doc.data().salary;
                let phoneNo = doc.data().phoneNo;
                let employmentType = doc.data().employmentType;
                let docId = doc.data().docId;

                content+=    '<tr>';
                content+=    '  <td> ' + fullName +'</td>';
                content+=    '  <td> ' + nationalID +'</td>';
                content+=    '  <td> ' + department +'</td>';
                content+=    '  <td> ' + salary +'</td>';
                content+=    '  <td> ' + phoneNo +'</td>';
                content+=    '  <td> ' + employmentType +'</td>';
                content+=    '  <td> <button class="btn btn-primary">Pay Salary</button> </td>'; 
                content+=    '  <td> <button class="btn btn-danger">Delete</button> </td>';                    
                content+=    '</tr>';

            })
            $("#incomeList").append(content);
        })

        //perform search
        document.getElementById("search").onkeyup = function(){

            document.getElementById("incomeList").innerHTML = '';

            let search = document.getElementById("search").value;
         

            firebase.firestore().collection("employees").where("fullName",">=", search || "fullName", "<=", search).where("fullName", "<=", search + "~").get().then((querySnapshot)=>{
                let content = '';
                querySnapshot.forEach((doc)=>{
    
                    let fullName = doc.data().fullName;
                    let nationalID = doc.data().nationalID;
                    let department = doc.data().department;
                    let salary = doc.data().salary;
                    let phoneNo = doc.data().phoneNo;
                    let employmentType = doc.data().employmentType;
                    let docId = doc.data().docId;
                    
    
                    content+=    '<tr>';
                    content+=    '  <td> ' + fullName +'</td>';
                    content+=    '  <td> ' + nationalID +'</td>';
                    content+=    '  <td> ' + department +'</td>';
                    content+=    '  <td> ' + salary +'</td>';
                    content+=    '  <td> ' + phoneNo +'</td>';
                    content+=    '  <td> ' + employmentType +'</td>';
                    content+=    '  <td> <button class="btn btn-primary">Pay Salary</button> </td>'; 
                    content+=    '  <td> <button class="btn btn-danger">Delete</button> </td>';                    
                    content+=    '</tr>';
    
                })
                $("#incomeList").append(content);
            })


        }

    }else{

    }
})