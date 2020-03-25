//1a)---------------------
try {
    function sum(x, y) {
        if ( typeof(x) === number && typeof(y) === number ) {
            return x + y
        } else {
            throw "Whoopsadaisy"
        }
    }
}
catch(err) {
    console.log(err)
}

 //1b)---------------------

 try {
    sum (1,2)
}
catch(err) {
    console.log(err)
}

//2a)---------------------

const user = {
    username: stadiumrave,
    password: transformers
}

function login (username, password) {
    if (username === password) {
        console.log("login successful!")
    } else {
        throw "those don't match- try again"
    }
}

//2b)---------------------

try {
    login("123", "abc")
}
catch(err) {
    console.log(err)
}

try {
    login("123", "123")
}
catch(err) {
    console.log(err)
} finally {
    console.log ("username: " + username + "\npassword: " + password)
}