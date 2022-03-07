// const sum = (value1, value2) => value1 + value2;
// console.log(sum(5,6));

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

// Fluxo de exceção:

// const verificaNumero = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos.');
//     }
//   };
  
//   const soma = (value1, value2) => {
//     try {
//        verificaNumero(value1, value2);
//        return value1 + value2; 
//     } catch (error) {
//         throw error.message;
//     }
//   }
//   console.log(soma(4, true));

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
console.log(customer);
