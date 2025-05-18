import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../Home/Home";
import Course from "../Course/Course";
import NotFound from "../NotFound/NotFound";
import Tutorial from "../Tutorial/Tutorial";
import Author from "../Author/Author";

import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import PDFViewerPage from "../../UI/PDF/PDFViewPage";
import Faq from "../Faq/Faq";
import getContentData from "../../utils/get_content_data";

function App() {
  const router = createHashRouter(
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
                element={<Tutorial contentData={contents} />}
              >
                {contents.route.map((eachContent, topicIndex) => {
                  const page = eachContent.page;
                  const topic = eachContent.topic;
                  return topicIndex === 0 ? (
                    <>
                      <Route index element={<Navigate to={topic} replace />} />
                      <Route
                        path={topic}
                        element={page}
                        key={`${contents.about.name}-${topic}`}
                      />
                    </>
                  ) : (
                    <Route
                      key={`${contents.about.name}-${topic}`}
                      path={topic}
                      element={page}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Route>

        {/* Author Page */}
        <Route path="/author" element={<Author />} />

        {/* Privacy Policy Page*/}
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />

        {/* Terms and Condition Page */}
        <Route path="/terms_and_condition" element={<TermsAndCondition />} />

        {/* FAQ Page */}
        <Route path="/faq" element={<Faq />} />

        {/* PDF Viewer Route */}
        <Route path="/pdf-viewer" element={<PDFViewerPage />} />

        {/* Explicit 404 Page Route */}
        <Route path="/not-found" element={<NotFound />} />

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
