const dispaly=document.getElementById("names");
const Topperbtn=document.getElementById("Topperbtn")
const averageSortbtn=document.getElementById("averageSortbtn");
const students = [
  
  { id: 1, name: "binit", marks: [85, 90, 80, 75, 95], section: "A" }, 
  { id: 2, name: "alina", marks: [90, 95, 88, 82, 92], section: "A" }, 
  { id: 3, name: "siddharth", marks: [80, 80, 85, 75, 80], section: "B" }, 

  
  { id: 4, name: "prijal", marks: [50, 60, 55, 45, 70], section: "A" }, 
  { id: 5, name: "maya", marks: [65, 70, 60, 58, 62], section: "B" }, 
  { id: 6, name: "rohan", marks: [40, 45, 50, 42, 48], section: "A" }, 

  
  { id: 7, name: "sneha", marks: [20, 30, 25, 15, 10], section: "B" }, 
  { id: 8, name: "ayush", marks: [35, 38, 40, 32, 28], section: "A" }, 
  { id: 9, name: "kiran", marks: [10, 15, 12, 5, 8], section: "B" },
  { id: 10, name: "diya", marks: [38, 39, 40, 35, 30], section: "B" }  
];

let studentReport =students.map(student=>{
    const total=student.marks.reduce((acc,mark)=>acc+mark,0);
    const average=total/student.marks.length;
    const stat=average>=40?"PASS":"FAIL";
    return{
        name:student.name,
        total:total,
        average:Math.ceil(average),
        status:stat
    }
});
let display = studentReport.map(report => {
    const StatusColor = report.status === "PASS" ? "green" : "red";
    
    return `
    <li style="border-color: ${StatusColor}">
        <h3 style="margin-top: 0;">${report.name.toUpperCase()}</h3>
        <p class="marks"><strong>Total:</strong> ${report.total}</p>
        <p class="marks"><strong>Average:</strong> ${report.average}</p>
        <p style="color: ${StatusColor}; font-weight: bold;">
            Status: ${report.status}
        </p>
    </li>`;
}).join("");

Topperbtn.addEventListener("click", () => {
    const filteredToppers = studentReport.filter(top => top.average >= 80);
    const topperHTML = filteredToppers.map(report => {
        return `
        <li style="border-color: green">
            <h3>${report.name.toUpperCase()}</h3>
            <p class="marks">Total: ${report.total}</p>
            <p class="marks">Average: ${report.average}</p>
            <p style="color: green">Status: ${report.status}</p>
        </li>`;
    }).join("");

    
    dispaly.innerHTML = topperHTML;
});

averageSortbtn.addEventListener("click",()=>{
const sortedReports = [...studentReport].sort((a, b) => b.average - a.average);
const sortedHTML = sortedReports.map(report => {
    const StatusColor = report.status === "PASS" ? "green" : "red";
    return `
    <li style="border-color: ${StatusColor}">
        <h3>${report.name.toUpperCase()}</h3>
        <p class="marks">Total: ${report.total}</p>
        <p class="marks">Average: ${report.average}</p>
        <p style="color: ${StatusColor}">Status: ${report.status}</p>
    </li>`;
}).join("");
dispaly.innerHTML = sortedHTML;
})
const searchInput = document.getElementById("studentname");

searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredResults = studentReport.filter(student => 
        student.name.toLowerCase().includes(searchValue)
    );

    const searchHTML = filteredResults.map(report => {
        const StatusColor = report.status === "PASS" ? "green" : "red";
        return `
        <li style="border-color: ${StatusColor}">
            <h3>${report.name.toUpperCase()}</h3>
            <p class="marks">Total: ${report.total}</p>
            <p class="marks">Average: ${report.average}</p>
            <p style="color: ${StatusColor}">Status: ${report.status}</p>
        </li>`;
    }).join("");
    dispaly.innerHTML = searchHTML;
});



dispaly.innerHTML = display;
dispaly.innerHTML=display;




