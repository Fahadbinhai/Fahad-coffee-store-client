import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Components/MainLayout";
import AllCoffee from "./Pages/AllCoffee";
import AddCoffee from "./Pages/AddCoffee";
import EditCoffee from "./Pages/EditCoffee";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        path:'/',
        Component:AllCoffee,
        loader: ()=> fetch('http://localhost:3000/coffees')
      },
      {
        path:'addCoffee',
        Component:AddCoffee
      },
      {
        path: 'edit-coffee-details/:id',
        Component: EditCoffee,
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)
      }
    ]
  },
]);

export default router;