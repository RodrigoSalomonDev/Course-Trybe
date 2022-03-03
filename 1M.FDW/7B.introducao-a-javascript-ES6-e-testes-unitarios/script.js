let userEmail = 'email@test.com';
function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    return console.log(userEmail);
  }
  userInfo();

  console.log(userEmail);