import PropTypes from 'prop-types';
import { SectionWrapp } from './Section.syled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapp>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapp>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
