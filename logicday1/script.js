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

    // Mapping to a new shape: { personName, city }
    const simplifiedUsers = data.map(user => ({
        personName: user.name,
        city: user.address.city // Navigating nested objects
    }));

    console.log(simplifiedUsers);
};

fetchUsers();