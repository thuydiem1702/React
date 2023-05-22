import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <table>

    <thead>
      <tr>
        <th>No.</th>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map((item, index) =>
          <tr>
            <td>{index + 1}</td>
            <td>{item.company}</td>
            <td>{item.contact}</td>
            <td>{item.country}</td>
          </tr>
        )
      }
    </tbody>
  </table>

);

