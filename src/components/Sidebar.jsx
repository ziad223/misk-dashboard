import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft, FaCarAlt, FaChalkboardTeacher, FaSuperpowers } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { SiContributorcovenant } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(true); // حالة تتبع ما إذا كان الشريط الجانبي مفتوحًا أم مغلقًا

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // تغيير حالة الشريط الجانبي عند النقر على السهم
  };

  return (
    <aside
      className={`bg-[#28914f] sticky top-0 flex overflow-x-hidden flex-col h-screen py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="p-2 relative">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? (
            <FaChevronRight className="idebar-icon absolute left-[-9px] cursor-pointer  top-0 bg-white text-[#28914f] rounded-full p-1 text-[25px]" />
          ) : (
            <FaChevronLeft className="idebar-icon absolute left-[-9px] cursor-pointer  top-0 bg-white text-[#28914f] rounded-full p-1 text-[25px]" />
          )}
        </button>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex-1 space-y-2">
          <Link
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'dashboard' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            to="/"
            onClick={() => handleLinkClick('dashboard')}
          >
            <MdDashboard />
            {isOpen && <span>لوحة التحكم</span>}
          </Link>
          <Link
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'projects' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            to="/employee"
            onClick={() => handleLinkClick('projects')}
          >
            <FaChalkboardTeacher />
            {isOpen && <span>الموظفين</span>}
          </Link>
          <Link
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'tasks' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            to="/moving"
            onClick={() => handleLinkClick('tasks')}
          >
            <IoMdMove />
            {isOpen && <span>الحركة</span>}
          </Link>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'مركبات' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('مركبات')}
          >
            <FaCarAlt />
            {isOpen && <span>المركبات</span>}
          </a>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'العهد' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('العهد')}
          >
            <SiContributorcovenant />
            {isOpen && <span>العهد</span>}
          </a>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'الصيانه' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('الصيانه')}
          >
            <GrHostMaintenance />
            {isOpen && <span>الصيانه</span>}
          </a>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'المحروقات' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('المحروقات')}
          >
            <FaSuperpowers />
            {isOpen && <span>المحروقات</span>}
          </a>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'الصلاحيات' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('الصلاحيات')}
          >
            <FaSuperpowers />
            {isOpen && <span>الصلاحيات</span>}
          </a>
          <a
            className={`flex items-center gap-3 text-lg font-bold px-5 py-2 ${
              activeLink === 'الملف الشخصي' ? 'text-[#28914f] bg-white' : 'text-white'
            } transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
            href="#"
            onClick={() => handleLinkClick('الملف الشخصي')}
          >
            <CgProfile />
            {isOpen && <span>الملف الشخصي</span>}
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
