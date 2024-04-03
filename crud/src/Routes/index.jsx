import AddUser from "../Pages/AddUser";
import DeleteUser from "../Pages/DeleteUser";
import EditUser from "../Pages/EditUser";
import Home from "../Pages/Home";
import UserDetail from "../Pages/UserDetail";

export const myRoutes = [
  { id: 1, path: "/", element: <Home />, title: "HomePage" },
  { id: 2, path: "/adduser", element: <AddUser />, title: "AddUser" },
  { id: 3, path: "/edituser", element: <EditUser />, title: "EditUser" },
  { id: 4, path: "/deleteuser", element: <DeleteUser />, title: "DeleteUser" },
  { id: 5, path: "/user/:id", element: <UserDetail /> },
];
 