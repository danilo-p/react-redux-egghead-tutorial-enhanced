import React from 'react';
import FilterButton from './FilterButton';
/**
 * Describes the footer of the app.
 *
 * @returns {jsx} The Footer template
 */
const Footer = () => (
  <p>
    Show:&nbsp;&nbsp;
    <FilterButton filter="SHOW_ALL">All</FilterButton>
    <FilterButton filter="SHOW_ACTIVE">Active</FilterButton>
    <FilterButton filter="SHOW_COMPLETED">Completed</FilterButton>
  </p>
);

export default Footer;
