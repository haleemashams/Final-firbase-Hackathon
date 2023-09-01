const app = firebase.initializeApp(firebaseConfig);
console.log(app);

const Register = () => {
    let username = document.getElementById('username').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    let role = 'User';

    console.log(username, lastname, email, password);
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            
            // Store user data in the database
            firebase.database().ref('users/' + user.uid).set({
                uid: user.uid,
                username: username,
                lastname: lastname,
                role: role,
                email: email,
                password: password,
                repassword: repassword,
            })
            .then(() => {
                const user = { email: email };
                localStorage.setItem('user', JSON.stringify(user));
                alert('User created successfully.');
                
                // Redirect to the login page
                window.location.href = '../pages/login/login.html';
            })
            .catch((error) => {
                alert(error);
            });
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorCode + ': ' + errorMessage);
        });
}
















const Login= () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log(user)
            const dbRef = firebase.database().ref();
            dbRef.child("users").child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val()
                    if (userData.role === 'Admin') {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        alert('User created successfully.')
                    //    window.location.href='../pages/dashboard/dashboard.html'
                    }
                    else {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        // window.location.href = './pages/login/login.html/'
                    }
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorCode + ': ' + errorMessage)
        });

}

