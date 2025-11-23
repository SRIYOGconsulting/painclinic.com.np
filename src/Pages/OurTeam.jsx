import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import teamMember1 from '../assets/images/team/1.png';
import teamMember2 from '../assets/images/team/2.png';
import teamMember3 from '../assets/images/team/3.png';

const teamMembers = [
  {
    name: 'Dr. Niru Nepal',
    title: 'Anesthesiology , Fellowship In Chronic Pain Management (FIPM)',
    image: teamMember1,
    socials: [
      { icon: Facebook, href: '#' },
      { icon: Instagram, href: '#' },
      { icon: Twitter, href: '#' },
    ],
  },
  {
    name: 'Dr. Puspak Regmi',
    title: 'Pain Specialist',
    image: teamMember2,
    socials: [
      { icon: Instagram, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Linkedin, href: '#' },
    ],
  },
  {
    name: 'Dr. Muskaan Shrestha',
    title: 'Pain Specialist',
    image: teamMember3,
    socials: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Linkedin, href: '#' },
    ],
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-50 bg-white min-h-screen font-[sans-serif] max-w-6xl mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center bg-[#ECF0F5] rounded-3xl shadow-sm w-80 h-80 pt-24 pb-6"
        >
          {/* Circular Image */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full border-[7px] border-white shadow-md transition-all duration-300 hover:border-[#234179]"
            />
          </div>

          {/* Content */}
          <div className="mt-10 px-4">
            <h3 className="text-[26px] font-semibold text-[#0A2241]">{member.name}</h3>
            <p className="text-[#707882] text-[16px] mt-2 leading-relaxed">{member.title}</p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-10">
              {member.socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
