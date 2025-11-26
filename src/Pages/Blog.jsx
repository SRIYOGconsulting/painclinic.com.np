import React from 'react'
import { Link } from 'react-router-dom';
import { UserRound, MessageCircleMore } from 'lucide-react';
import { motion } from 'motion/react';
import headacheImg from "../assets/images/headache-pain.jpg";
import jointImg from "../assets/images/joint-pain.jpg";
import neckImg from "../assets/images/neck-pain.jpg";
import shoulderImg from "../assets/images/shoulder-pain.jpg";
import orofacial from "../assets/images/orafacial-pain.jpg";
import disc from "../assets/images/back-pain.jpg";
import knee from "../assets/images/knee-pain.jpg";
import ankel from "../assets/images/ankle-pain.jpg";
import nerve from "../assets/images/nerve-pain.jpg";
import muscle from "../assets/images/muscle-pain.jpg";
import fibromyalgia from "../assets/images/fibromyalgia-pain.jpg";
import sports from "../assets/images/sports-injury.jpg";
import whole from "../assets/images/whole-body-pain.jpg";
import cancer from "../assets/images/cancer-pain.jpg";

const blogs = [
  {
    title: "Headache",
    description:
      "How Weather Changes Trigger Headaches: Causes and Solutions",
    image: headacheImg,
    time: "2 Minutes Read",
    path: "what-is-headache",
  },
  {
    title: "Neck Pain",
    description:
      "Neck Pain: Causes of neck pain during the monsoon season",
    image: neckImg,
    time: "2 Minutes Read",
    path: "what-is-neck-pain",
  },
  {
    title: "Joint Pain",
    description:
      "Joint Care: How to Protect Your Joints",
    image: jointImg,
    time: "3 Minutes Read",
    path: "what-is-joint-pain",
  },
  {
    title: "Shoulder Pain",
    description:
      "Shoulder Pain and Cold Weather: Understanding the Connection",
    image: shoulderImg,
    time: "2 Minutes Read",
    path: "what-is-shoulder-pain",
  },
  {
    title: "Orofacial Pain",
    description:
      "The Winter Chill and Orofacial Pain: Causes and Care",
    image: orofacial,
    time: "2 Minutes Read",
    path: "what-is-orofacial-pain",
  },
  {
    title: "Knee Pain",
    description:
      "Winter and Knee Pain: Why It Happens and What You Can Do",
    image: knee,
    time: "2 Minutes Read",
    path: "what-is-knee-pain",
  },
  {
    title: "Nerve Related Pain",
    description:
      "Winter and Nerve Pain: Understanding the Triggers",
    image: nerve,
    time: "2 Minutes Read",
    path: "what-is-nerve-pain",
  },
  {
    title: "Muscle Pain",
    description:
      "Muscle Pain: Symptoms and causes",
    image: muscle,
    time: "3 Minutes Read",
    path: "what-is-muscle-pain",
  },
  {
    title: "Sports Injury",
    description:
      "Preventing Sports Injuries During Outdoor Activities.",
    image: sports,
    time: "3 Minutes Read",
    path: "what-is-sports-pain",
  },
  {
    title: "Whole Body Pain",
    description:
      "Understanding Chronic Whole Body Pain: When to Seek Help",
    image: whole,
    time: "3 Minutes Read",
    path: "what-is-whole-body-pain",
  },
  {
    title: "Cancer Pain",
    description:
      "Comprehensive Pain Management for Cancer Patients",
    image: cancer,
    time: "3 Minutes Read",
    path: "what-is-cancer-pain",
  },
];


const Blog = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-24 font-[sans-serif]'>
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <Link
            to={`/${blog.path}`}
            key={index}
            className="bg-[#ECF0F5CC] rounded-2xl shadow-md hover:shadow-lg transition-all p-5 block"
          >
            {/* Image */}
            <motion.div
  className="mb-4 relative group overflow-hidden rounded-xl"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-56 object-cover rounded-xl"
  />

  {/* Blue overlay */}
  <div
    className="
      absolute inset-0 
      bg-blue-600 
      opacity-0 
      group-hover:opacity-40 
      transition-opacity 
      duration-300 
      rounded-xl
    "
  />
</motion.div>


            {/* Title */}
            <h2 className="text-[18px] font-semibold mb-2 leading-snug hover:underline text-[#234179]">
              {blog.description}
            </h2>

            {/* Meta */}
            <div className="flex items-center gap-6 text-[11px] text-gray-600 mt-3">
              {/* Author */}
              <div className="flex items-center gap-2">
                <UserRound size={16} className="text-[#234179]" />
                <span>Advance Pain Clinic</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2">
                <MessageCircleMore size={16} className="text-[#234179]" />
                <span>{blog.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
