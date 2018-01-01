import React from 'react';
import FilterLink from './FilterLink';
/**
 * Describes the footer of the app.
 *
 * @returns {jsx} The Footer template
 */
const Footer = () => (
  <p>
    Show:&nbsp;&nbsp;
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;
