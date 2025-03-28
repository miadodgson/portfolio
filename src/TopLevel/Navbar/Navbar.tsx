import styles from '../Navbar/Navbar.module.css'
import React, { useState, useRef } from 'react'
import NavIconImg from '../../Assets/Images/NavIcon.png'
import { useNavigate } from 'react-router-dom'
import HomeIcon from './NavImages/HomeIcon.png'
import EducationIcon from './NavImages/EducationIcon.png'
import ExperienceIcon from './NavImages/ExperienceIcon.png'
import PublicationsIcon from './NavImages/PublicationsIcon.png'
import ResourcesIcon from './NavImages/ResourcesIcon.png'
import ContactIcon from './NavImages/ContactIcon.png'

const NavIcon = () => <img src={NavIconImg} className={styles.navButton} alt="Nav Icon" />

const Nav = () => {
	return (
		<Navbar>
			<NavItem icon={<NavIcon />}>
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

const NavItem: React.FC<{ icon: React.ReactNode; children: React.ReactElement<DropdownMenuProps> }> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <button
        className={styles.navButton}
        onClick={() => setOpen(!open)}
        style={{
          transform: open ? 'rotate(180deg)' : 'rotate(90deg)',
          transition: 'transform 0.3s ease-in-out',
		  background: 'none',
		  border: 'none',
        }}
      >
        {props.icon}
      </button>
      {open && React.cloneElement(props.children, { closeMenu: () => setOpen(false) })}
    </li>
  );
};

interface DropdownMenuProps {
	  closeMenu: () => void; // Function to close the menu
}	

const DropdownMenu = ({ closeMenu }: DropdownMenuProps) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    closeMenu(); // Close the menu
    navigate(route); // Navigate to the route
  };

  const DropdownItem: React.FC<{ leftIcon: React.ReactNode; route: string; routeName: string }> = ({ leftIcon, route, routeName }) => {
    return (
      <div
        onClick={() => handleNavigation(route)}
        className={styles.menuItem}
      >
        <span className={styles.iconButton}>{leftIcon}</span>
        <span className={styles.routeName}>{routeName}</span>
      </div>
    );
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.menu}>
        <DropdownItem
          leftIcon={<img src={HomeIcon} height={35} width={35} alt="Home" />}
          route="/"
          routeName="Home"
        />
        <DropdownItem
          leftIcon={
            <img
              src={EducationIcon}
              alt="Education"
              height={35}
              width={35}
            />
          }
          route="/Education"
          routeName="Education"
        />
        <DropdownItem
          leftIcon={
            <img
              src={ExperienceIcon}
              alt="Research"
              height={40}
              width={40}
            />
          }
          route="/Experience"
          routeName="Research"
        />
        <DropdownItem
          leftIcon={
            <img
              src={PublicationsIcon}
              alt="Publications"
              height={40}
              width={40}
            />
          }
          route="/Publications"
          routeName="Publications"
        />
        <DropdownItem
          leftIcon={
            <img src={ResourcesIcon} alt="Resources" height={30} width={30} />
          }
          route="/Resources"
          routeName="Resources"
        />
        <DropdownItem
          leftIcon={
            <img src={ContactIcon} alt="Contact" height={35} width={35} />
          }
          route="/Contact"
          routeName="Contact"
        />
      </div>
    </div>
  );
};

export default Nav;
