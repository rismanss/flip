import { useState } from 'react';
import './dropdown.css';

const Dropdown = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown" select="testselect">
      <button
        className="dropbtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        URUTKAN
      </button>
      {show && (
        <div className="dropdown-content">
          <a href="/#">
            <option value='Nama A - Z' onClick={(e) => props.setfilter(e.target.value)}>Nama A - Z</option>
          </a>
          <a href="/#">
            <option value='Nama Z - A' onClick={(e) => props.setfilter(e.target.value)}>Nama Z - A</option>
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
