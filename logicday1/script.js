// let isLoggedIn = false;

// const toggleLogin =()=>{
//  isLoggedIn=!isLoggedIn
//  const message = isLoggedIn?"welcome":"please login";
//  console.log(message)
// }
// toggleLogin()
// toggleLogin()
const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const simplifiedUsers = data.map(user => ({
        personName: user.name,
        city: user.address.city 
    }));

    console.log(simplifiedUsers);
};

fetchUsers();