class student {
    constructor(name,marks){
        this.name = name;
        this.marks = marks
    }

    getGrade(){
        if(this.marks>=90) return "A"
        else if(this.marks>=75) return "B"
        else if(this.marks>=60) return "c"
        else return "D"

    }
}

     let addBtn = document.querySelector("#addBtn");
     let list = document.querySelector("#studentList")


    //  ADD BUTTON

     addBtn.addEventListener("click" , ()=>{
    const name = document.querySelector("#inputName").value.trim();
    const marks = document.querySelector("#inputMark").value;

    if(name === "" || marks === "" || isNaN(marks) ){
        alert("Fill all the Fields");
        return;
        
    }

    else{
        let s1 = new student(name,marks);

       let li = document.createElement("li");
       li.textContent = `Name:${s1.name} | Marks:${s1.marks} | Grade:${s1.getGrade()}`

       let span = document.createElement("span")

       let delBtn = document.createElement("button");
       delBtn.textContent = "Delete"
       delBtn.classList.add("delete")


      // DELETE BUTTON

       delBtn.addEventListener("click" , ()=>{
         li.remove()
       })

       li.append(span,delBtn);
       list.append(li)

    }

    document.querySelector("#inputName").value = ""
    document.querySelector("#inputMark").value = ""
})