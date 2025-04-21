import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home/Home";
import Course from "../Course/Course";
import NotFound from "../NotFound/NotFound";
import Tutorial from "../Tutorial/Tutorial";
import { contentData } from "../../data/content_data";
import { toSnakeCase } from "../../utils/custom_string";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* Home Page */}
        <Route index element={<Home />} />
        {/* Course Page */}

        <Route path=":category/">
          <Route index element={<Course />} />
          {contentData.map((contents, index) => {
            return (
              <Route key={index} element={<Tutorial listOfTopics={contents} />}>
                {contents.map((eachContent, index) => (
                  <Route
                    key={index}
                    path={toSnakeCase(eachContent.topic)}
                    element={eachContent.page}
                  />
                ))}
              </Route>
            );
          })}
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
