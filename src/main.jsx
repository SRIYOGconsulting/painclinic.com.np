import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import OurTeam from './Pages/OurTeam.jsx';
import WWC from './Pages/WWC.jsx';
import FAQs from './Pages/FAQs.jsx';
import Blog from './Pages/Blog.jsx';
import Lab from './Pages/Lab.jsx';
import Pharmacy from './Pages/Pharmacy.jsx';
import Physiotherapy from './Pages/Physiotherapy.jsx';
import Contact from './Pages/Contact.jsx';
import Conditions from './Pages/Conditions.jsx';

// Team messages
import PuspakM from './Pages/PuspakM.jsx';
import NiruM from './Pages/NiruM.jsx';
import MuskanM from './Pages/MuskanM.jsx';

// Blog detail pages
import Headache from './Pages/Headache.jsx';
import JointPain from './Pages/JointPain.jsx';
import NeckPain from './Pages/NeckPain.jsx';
import ShoulderPain from './Pages/ShoulderPain.jsx';
import OrofacialPain from './Pages/OrofacialPain.jsx';
import KneePain from './Pages/KneePain.jsx';
import NervePain from './Pages/NervePain.jsx';
import MusclePain from './Pages/MusclePain.jsx';
import SportsInjury from './Pages/SportsInjury.jsx';
import WholeBodyPain from './Pages/WholeBodyPain.jsx';
import CancerPain from './Pages/CancerPain.jsx';

// Conditions pages
import HeadacheC from './Pages/HeadacheC.jsx';
import JointPainC from './Pages/JointPainC.jsx';
import NeckPainC from './Pages/NeckPainC.jsx';
import ShoulderPainC from './Pages/ShoulderPainC.jsx';
import OrofacialPainC from './Pages/OrofacialPainC.jsx';
import KneePainC from './Pages/KneePainC.jsx';
import NervePainC from './Pages/NervePainC.jsx';
import MusclePainC from './Pages/MusclePainC.jsx';
import SportsInjuryC from './Pages/SportsInjuryC.jsx';
import WholeBodyPainC from './Pages/WholeBodyPainC.jsx';
import CancerPainC from './Pages/CancerPainC.jsx';
import DiscProlapseC from './Pages/DiscProlapseC.jsx';
import AnklePainC from './Pages/AnklePainC.jsx';
import FibromyalgiaC from './Pages/FibromyalgiaC.jsx';

// Other
import Qr from './Pages/Qr.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: 'about', element: <About /> },
      { path: 'team', element: <OurTeam /> },
      { path: 'cure', element: <WWC /> },
      { path: 'lab', element: <Lab /> },
      { path: 'pharmacy', element: <Pharmacy /> },
      { path: 'physiotherapy', element: <Physiotherapy /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'contact', element: <Contact /> },

      // Team Messages
      { path: 'puspak-message', element: <PuspakM /> },
      { path: 'niru-message', element: <NiruM /> },
      { path: 'muskaan-message', element: <MuskanM /> },

      // Conditions
      { path: 'conditions', element: <Conditions /> },
      { path: 'conditions/headache', element: <HeadacheC /> },
      { path: 'conditions/joint-pain', element: <JointPainC /> },
      { path: 'conditions/neck-pain', element: <NeckPainC /> },
      { path: 'conditions/shoulder-pain', element: <ShoulderPainC /> },
      { path: 'conditions/orofacial-pain', element: <OrofacialPainC /> },
      { path: 'conditions/knee-pain', element: <KneePainC /> },
      { path: 'conditions/nerve-pain', element: <NervePainC /> },
      { path: 'conditions/muscle-pain', element: <MusclePainC /> },
      { path: 'conditions/sports-pain', element: <SportsInjuryC /> },
      { path: 'conditions/whole-body-pain', element: <WholeBodyPainC /> },
      { path: 'conditions/cancer-pain', element: <CancerPainC /> },
      { path: 'conditions/disc-prolapse', element: <DiscProlapseC /> },
      { path: 'conditions/ankle-pain', element: <AnklePainC /> },
      { path: 'conditions/fibromyalgia', element: <FibromyalgiaC /> },

      // Blog routes
      {
        path: 'blog',
        children: [
          { index: true, element: <Blog /> },

          { path: 'what-is-headache', element: <Headache /> },
          { path: 'what-is-joint-pain', element: <JointPain /> },
          { path: 'what-is-neck-pain', element: <NeckPain /> },
          { path: 'what-is-shoulder-pain', element: <ShoulderPain /> },
          { path: 'what-is-orofacial-pain', element: <OrofacialPain /> },
          { path: 'what-is-knee-pain', element: <KneePain /> },
          { path: 'what-is-nerve-pain', element: <NervePain /> },
          { path: 'what-is-muscle-pain', element: <MusclePain /> },
          { path: 'what-is-sports-pain', element: <SportsInjury /> },
          { path: 'what-is-whole-body-pain', element: <WholeBodyPain /> },
          { path: 'what-is-cancer-pain', element: <CancerPain /> },
        ],
      },

      { path: 'qr', element: <Qr /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
