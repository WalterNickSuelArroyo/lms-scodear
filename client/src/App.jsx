import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/students/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/students/Courses";
import MyLearning from "./pages/students/MyLearning";
import Profile from "./pages/students/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
      },

      // admin routes start from here
      {
        path: "admin",
        element: (
          <Sidebar />
          // <AdminRoute>
          //   <Sidebar />
          // </AdminRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          // {
          //   path: "course/create",
          //   element: <AddCourse />,
          // },
          // {
          //   path: "course/:courseId",
          //   element: <EditCourse />,
          // },
          // {
          //   path: "course/:courseId/lecture",
          //   element: <CreateLecture />,
          // },
          // {
          //   path: "course/:courseId/lecture/:lectureId",
          //   element: <EditLecture />,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
