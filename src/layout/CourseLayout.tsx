import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

// Master Layout
const CourseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default CourseLayout;
