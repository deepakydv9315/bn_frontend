import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faLongArrowAltRight,
  faListAlt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [

  {
    title: 'Profile',
    path: '/user',
    icon: <FontAwesomeIcon icon={faUser} />,
    cName: 'nav-text'
  },
  {
    title: 'Passwords',
    path: '/user/password',
    icon: <FontAwesomeIcon icon={faListAlt} />,
    cName: 'nav-text'
  },
  {
    title: 'Address Book',
    path: '/user/address',
    icon: <FontAwesomeIcon icon={faAddressBook} />,
    cName: 'nav-text'
  },
  {
    title: 'My Orders',
    path: '/user/orders',
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    icon: <FontAwesomeIcon icon={faLongArrowAltRight} />,
    cName: 'nav-text',
  }
];
