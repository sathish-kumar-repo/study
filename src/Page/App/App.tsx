import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home/Home";
import Course from "../Course/Course";
import NotFound from "../NotFound/NotFound";
import Tutorial from "../Tutorial/Tutorial";

import getContentData from "../../utils/get_content_data";

function App() {
  console.log(getContentData());

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* Home Page */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Course Page */}
        <Route path=":category/">
          <Route index element={<Course />} />

          {getContentData().map((contents, index) => {
            return (
              <Route
                key={index}
                path={`${contents.about.name}/`}
                element={<Tutorial key={index} contentData={contents} />}
              >
                {contents.route.map(function (eachContent, topicIndex) {
                  return (
                    <Route
                      index={topicIndex == 0}
                      key={topicIndex}
                      path={topicIndex == 0 ? "" : eachContent.topic}
                      element={eachContent.page}
                    />
                  );
                })}
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
