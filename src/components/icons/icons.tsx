import React from 'react';
import {
    FiGrid,
    FiSettings,
    FiHome,
    FiBell,
    FiChevronDown,
    FiTag,
    FiSearch,
} from 'react-icons/fi';
import {
    FaTaxi,
    FaRocket,
    FaRegUserCircle,
    FaRegCalendar,
    FaChartLine,
} from 'react-icons/fa';
import { RiBankLine } from 'react-icons/ri';

const size = '24px';

export const generalIcons = {
    bell: <FiBell size={size} />,
    chevronDown: <FiChevronDown size={size} />,
    grid: <FiGrid size={size} />,
    home: <FiHome size={size} />,
    rocket: <FaRocket size={size} />,
    settings: <FiSettings size={size} />,
    user: <FaRegUserCircle size={size} />,
    calendar: <FaRegCalendar size={size} />,
    taxi: <FaTaxi size={size} />,
    chart: <FaChartLine size={size} />,
    tags: <FiTag size={size} />,
    bank: <RiBankLine size={size} />,
    search: <FiSearch size={size} />,
};
