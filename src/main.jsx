import { StrictMode, createElement, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './Pages/Home.jsx';

const About = lazy(() => import('./Pages/About.jsx'));
const OurTeam = lazy(() => import('./Pages/OurTeam.jsx'));
const WWC = lazy(() => import('./Pages/WWC.jsx'));
const FAQs = lazy(() => import('./Pages/FAQs.jsx'));
const Blog = lazy(() => import('./Pages/Blog.jsx'));
const Lab = lazy(() => import('./Pages/Services/Lab.jsx'));
const Pharmacy = lazy(() => import('./Pages/Services/Pharmacy.jsx'));
const Physiotherapy = lazy(() => import('./Pages/Services/Physiotherapy.jsx'));
const Contact = lazy(() => import('./Pages/Contact.jsx'));
const Conditions = lazy(() => import('./Pages/Conditions.jsx'));
const PuspakM = lazy(() => import('./Pages/Messages/PuspakM.jsx'));
const NiruM = lazy(() => import('./Pages/Messages/NiruM.jsx'));
const MuskanM = lazy(() => import('./Pages/Messages/MuskanM.jsx'));
const Headache = lazy(() => import('./Pages/Blogs/Headache.jsx'));
const JointPain = lazy(() => import('./Pages/Blogs/JointPain.jsx'));
const NeckPain = lazy(() => import('./Pages/Blogs/NeckPain.jsx'));
const ShoulderPain = lazy(() => import('./Pages/Blogs/ShoulderPain.jsx'));
const OrofacialPain = lazy(() => import('./Pages/Blogs/OrofacialPain.jsx'));
const KneePain = lazy(() => import('./Pages/Blogs/KneePain.jsx'));
const NervePain = lazy(() => import('./Pages/Blogs/NervePain.jsx'));
const MusclePain = lazy(() => import('./Pages/Blogs/MusclePain.jsx'));
const SportsInjury = lazy(() => import('./Pages/Blogs/SportsInjury.jsx'));
const WholeBodyPain = lazy(() => import('./Pages/Blogs/WholeBodyPain.jsx'));
const CancerPain = lazy(() => import('./Pages/Blogs/CancerPain.jsx'));
const HeadacheC = lazy(() => import('./Pages/Conditions/HeadacheC.jsx'));
const JointPainC = lazy(() => import('./Pages/Conditions/JointPainC.jsx'));
const NeckPainC = lazy(() => import('./Pages/Conditions/NeckPainC.jsx'));
const ShoulderPainC = lazy(() => import('./Pages/Conditions/ShoulderPainC.jsx'));
const OrofacialPainC = lazy(() => import('./Pages/Conditions/OrofacialPainC.jsx'));
const KneePainC = lazy(() => import('./Pages/Conditions/KneePainC.jsx'));
const NervePainC = lazy(() => import('./Pages/Conditions/NervePainC.jsx'));
const MusclePainC = lazy(() => import('./Pages/Conditions/MusclePainC.jsx'));
const SportsInjuryC = lazy(() => import('./Pages/Conditions/SportsInjuryC.jsx'));
const WholeBodyPainC = lazy(() => import('./Pages/Conditions/WholeBodyPainC.jsx'));
const CancerPainC = lazy(() => import('./Pages/Conditions/CancerPainC.jsx'));
const DiscProlapseC = lazy(() => import('./Pages/Conditions/DiscProlapseC.jsx'));
const AnklePainC = lazy(() => import('./Pages/Conditions/AnklePainC.jsx'));
const FibromyalgiaC = lazy(() => import('./Pages/Conditions/FibromyalgiaC.jsx'));
const Qr = lazy(() => import('./Pages/Qr.jsx'));

const withSuspense = (RouteComponent) => (
  <Suspense fallback={null}>
    {createElement(RouteComponent)}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: 'about', element: withSuspense(About) },
      { path: 'team', element: withSuspense(OurTeam) },
      { path: 'cure', element: withSuspense(WWC) },
      { path: 'lab', element: withSuspense(Lab) },
      { path: 'pharmacy', element: withSuspense(Pharmacy) },
      { path: 'physiotherapy', element: withSuspense(Physiotherapy) },
      { path: 'faqs', element: withSuspense(FAQs) },
      { path: 'contact', element: withSuspense(Contact) },

      // Team Messages
      { path: 'puspak-message', element: withSuspense(PuspakM) },
      { path: 'niru-message', element: withSuspense(NiruM) },
      { path: 'muskaan-message', element: withSuspense(MuskanM) },

      // Conditions
      { path: 'conditions', element: withSuspense(Conditions) },
      { path: 'conditions/headache', element: withSuspense(HeadacheC) },
      { path: 'conditions/joint-pain', element: withSuspense(JointPainC) },
      { path: 'conditions/neck-pain', element: withSuspense(NeckPainC) },
      { path: 'conditions/shoulder-pain', element: withSuspense(ShoulderPainC) },
      { path: 'conditions/orofacial-pain', element: withSuspense(OrofacialPainC) },
      { path: 'conditions/knee-pain', element: withSuspense(KneePainC) },
      { path: 'conditions/nerve-pain', element: withSuspense(NervePainC) },
      { path: 'conditions/muscle-pain', element: withSuspense(MusclePainC) },
      { path: 'conditions/sports-pain', element: withSuspense(SportsInjuryC) },
      { path: 'conditions/whole-body-pain', element: withSuspense(WholeBodyPainC) },
      { path: 'conditions/cancer-pain', element: withSuspense(CancerPainC) },
      { path: 'conditions/disc-prolapse', element: withSuspense(DiscProlapseC) },
      { path: 'conditions/ankle-pain', element: withSuspense(AnklePainC) },
      { path: 'conditions/fibromyalgia', element: withSuspense(FibromyalgiaC) },

      // Blog routes
      {
        path: 'blog',
        children: [
          { index: true, element: withSuspense(Blog) },

          { path: 'what-is-headache', element: withSuspense(Headache) },
          { path: 'what-is-joint-pain', element: withSuspense(JointPain) },
          { path: 'what-is-neck-pain', element: withSuspense(NeckPain) },
          { path: 'what-is-shoulder-pain', element: withSuspense(ShoulderPain) },
          { path: 'what-is-orofacial-pain', element: withSuspense(OrofacialPain) },
          { path: 'what-is-knee-pain', element: withSuspense(KneePain) },
          { path: 'what-is-nerve-pain', element: withSuspense(NervePain) },
          { path: 'what-is-muscle-pain', element: withSuspense(MusclePain) },
          { path: 'what-is-sports-pain', element: withSuspense(SportsInjury) },
          { path: 'what-is-whole-body-pain', element: withSuspense(WholeBodyPain) },
          { path: 'what-is-cancer-pain', element: withSuspense(CancerPain) },
        ],
      },

      { path: 'qr', element: withSuspense(Qr) },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
