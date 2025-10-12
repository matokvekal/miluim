// function add(a:number, b:number):number {
//   return a + b;
// }


// let a = add(1, 2);

// console.log(add(2, 3));
// // console.log(add("A", 3));
interface User {
  id: number;
  name: string;
  email?: string;
  address: {
    city: string;
    country: string;
  };
}



type Product = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  id: string;
  customer: User;
  items: Product[];
  status: "new" | "shipped" | "delivered";
};