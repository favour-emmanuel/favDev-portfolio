import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectTheme, setTheme } from "./Redux/slice/themeSlice";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Dark" }));
    }
  }, []);

  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Dark" ? "bg-appBlack" : "bg-appLightGray"
      } `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Route>
          <Route
            path="/*"
            element={
              <h1 className="flex justify-center text-2xl font-bold">
                Page not found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
