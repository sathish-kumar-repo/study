import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home/Home";
import Course from "../Course/Course";
import NotFound from "../NotFound/NotFound";
import Photography from "../../screen/Phtography/code/Intro";
import Intro from "../../screen/Phtography/code/Intro";
import HowToInstall from "../../screen/Phtography/code/HowToInstall";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* Home Page */}
        <Route index element={<Home />} />
        {/* Course Page */}
        <Route path=":category/">
          <Route index element={<Course />} />
          <Route path="intro" element={<Intro />} />
          <Route path="how_to_install" element={<HowToInstall />} />

          <Route path="coding" element={<Intro />} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
