import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './Pages/About.jsx'
import Conditions from './Pages/Conditions.jsx'
import OurTeam from './Pages/OurTeam.jsx'
import WWC from './Pages/WWC.jsx'
import Messages from './Pages/Messages.jsx'
import FAQs from './Pages/FAQs.jsx'
import Blog from './Pages/Blog.jsx'
import Lab from './Pages/Lab.jsx'
import Pharmacy from './Pages/Pharmacy.jsx'
import Physiotherapy from './Pages/Physiotherapy.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import PuspakM from './Pages/PuspakM.jsx'
import NiruM from './Pages/NiruM.jsx'
import MuskanM from './Pages/MuskanM.jsx'
import Headache from './Pages/Headache.jsx'
import JointPain from './Pages/JointPain.jsx'
import NeckPain from './Pages/NeckPain.jsx'
import ShoulderPain from './Pages/ShoulderPain.jsx'
import OrofacialPain from './Pages/OrofacialPain.jsx'
import KneePain from './Pages/KneePain.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      { index: true, element: <Home /> },
      {path: "about", element : <About /> },
      {path: "team", element : <OurTeam /> },
      {path: "whatwecure", element : <WWC /> },
      {path: "messages", element : <Messages /> },
      {path: "lab", element : <Lab /> },
      {path: "pharmacy", element : <Pharmacy /> },
      {path: "physiotherapy", element : <Physiotherapy /> },
      {path: "conditions", element : <Conditions /> },
      {path: "faqs", element : <FAQs /> },
      {path: "blog", element : <Blog /> },
      {path: "contact", element : <Contact /> },
      {path: "puspak-message", element : <PuspakM /> },
      {path: "niru-message", element : <NiruM /> },
      {path: "muskan-message", element : <MuskanM /> },
      {path: "headache", element : <Headache /> },
      {path: "jointpain", element : <JointPain /> },
      {path: "neckpain", element : <NeckPain /> },
      {path: "shoulderpain", element : <ShoulderPain /> },
      {path: "orofacialpain", element : <OrofacialPain /> },
      {path: "kneepain", element : <KneePain /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
