import styles from '../Navbar/Navbar.module.css';
import React, { useState, useRef, useEffect } from 'react';
import NavIconImg from '../../Assets/Images/NavIcon.png';
import { useNavigate } from 'react-router-dom';
import HomeIcon from './NavImages/HomeIcon.png';
import EducationIcon from './NavImages/EducationIcon.png';
import ExperienceIcon from './NavImages/ExperienceIcon.png';
import PublicationsIcon from './NavImages/PublicationsIcon.png';
import ResourcesIcon from './NavImages/ResourcesIcon.png';
import ContactIcon from './NavImages/ContactIcon.png';

/** Nav Icon Component */
const NavIcon = ({ open }: { open: boolean }) => (
  <img
    src={NavIconImg}
    className={styles.navIcon} 
    alt="Nav Icon"
    style={{
      transition: 'transform 0.3s ease-in-out',
      transform: open ? 'rotate(180deg)' : 'rotate(90deg)',
      transformOrigin: 'center',
      width: '45px', 
      height: '45px',
    }}
  />
);

const Nav = () => {
  return (
    <Navbar>
      <NavItem>
        <DropdownMenu closeMenu={() => {}} />
      </NavItem>
    </Navbar>
  );
};

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

/** Navigation Item */
const NavItem: React.FC<{ children: React.ReactElement<DropdownMenuProps> }> = (props) => {
  const [open, setOpen] = useState(false);
  const navItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navItemRef.current && !navItemRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className={styles.navItem} ref={navItemRef}>
      <button
        className={styles.navButton}
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <NavIcon open={open} />
      </button>

      {open && React.cloneElement(props.children, { closeMenu: () => setOpen(false) })}
    </li>
  );
};

/** Dropdown Menu */
interface DropdownMenuProps {
  closeMenu: () => void;
}

const DropdownMenu = ({ closeMenu }: DropdownMenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    closeMenu();
    navigate(route);
  };

  const DropdownItem: React.FC<{ leftIcon: React.ReactNode; route: string; routeName: string }> = ({ leftIcon, route, routeName }) => {
    return (
      <div onClick={() => handleNavigation(route)} className={styles.menuItem}>
        <span className={styles.iconButton}>{leftIcon}</span>
        <span className={styles.routeName}>{routeName}</span>
      </div>
    );
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.menu}>
        <DropdownItem leftIcon={<img src={HomeIcon} height={35} width={35} alt="Home" />} route="/" routeName="Home" />
          {/* 
          <DropdownItem leftIcon={<img src={EducationIcon} alt="Education" height={35} width={35} />} route="/Education" routeName="Education" />
          <DropdownItem leftIcon={<img src={ExperienceIcon} alt="Research" height={40} width={40} />} route="/Experience" routeName="Research" />
          <DropdownItem leftIcon={<img src={ResourcesIcon} alt="Resources" height={30} width={30} />} route="/Resources" routeName="Resources" />
         */}
        <DropdownItem leftIcon={<img src={PublicationsIcon} alt="Research" height={40} width={40} />} route="/Publications" routeName="Research" />
        <DropdownItem leftIcon={<img src={ContactIcon} alt="Contact" height={35} width={35} />} route="/Contact" routeName="Contact" />
      </div>
    </div>
  );
};

export default Nav;
