import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const router = createBrowserRouter([{
  path: '/',
  element: <AboutMe />,
  errorElement: <NotFound />
},
{
  path: '/Portfolio',
  element: <Portfolio />,
},
{
  path: '/Contact', 
  element: <Contact />,
},
{
  path: '/Resume', 
  element: <Resume />,
},
]);

function App() {

  return (
<div className="flex flex-col min-h-screen">
  <Header />
    <main className="flex-grow">
      <RouterProvider router={router}/>
    </main>
  <Footer />
</div>
  )
}

export default App
