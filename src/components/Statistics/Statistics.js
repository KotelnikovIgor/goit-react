/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.statistics__title}>{title}</h2>
      <ul className={s.statistics__list}>
        {stats.length > 0 &&
          stats.map(el => (
            <li key={el.id} className={s.statistics__item}>
              <span className={s.statistics__label}>{el.label}</span>
              <span
                className={s.statistics__percentage}
              >{`${el.percentage}%`}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
  stats: PropTypes.shape({
    id: '',
    label: '',
    percentage: 0,
  }),
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
