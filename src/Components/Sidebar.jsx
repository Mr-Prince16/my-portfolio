import React from 'react';
import {
  FaLinkedin, FaGithub, FaTelegram, FaPhone, FaEnvelope,
  FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaCertificate
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const navItems = [
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'jobs', label: 'Experience', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
];

const socialLinks = [
  {
    icon: <FaLinkedin />, label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srinjoy-bhattacharya-2960ba19b/'
  },
  {
    icon: <FaGithub />, label: 'GitHub',
    href: 'https://github.com/Mr-Prince16'
  },
  {
    icon: <FaTelegram />, label: 'Telegram',
    href: 'https://t.me/Prince2116'
  },
  {
    icon: <FaPhone />, label: 'Phone',
    href: 'tel:+918697404251'
  },
  {
    icon: <FaEnvelope />, label: 'Email',
    href: 'mailto:srinjoybhattacharya9@gmail.com'
  }
];

const Sidebar = ({ onScrollTo }) => {
  const { t } = useTranslation();
  return (
    <aside className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg p-4 h-full overflow-hidden">
      {/* Navigation */}
      <h2 className="font-bold text-lg mb-4">{t('categories')}</h2>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onScrollTo(item.id)}
            className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
          >
            <span className="text-md">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <h2 className="font-bold text-lg mt-8 mb-4">{t('social')}</h2>
      <ul className="space-y-3">
        {socialLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <span className="text-xl">{link.icon}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
