
// Вариант с инпутом и анимацией стрелки
import React, { useState } from 'react';
import { FormControl, Dropdown, InputGroup } from 'react-bootstrap';
import ik from '/public/img/ik.svg'
import './drop.css'

const options  = ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'];

const CustomDropdownInput = ({name}) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState();


  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setDropdownOpen(false);
  };
  const handleInputSubmit = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <InputGroup className="dropBut">
      <FormControl
        placeholder={name}
        value={inputValue}
        onChange={handleInputChange}
        className='inputDropBut'
      />
      <img className={`ikDrop ${isDropdownOpen ? 'rotate' : ''}`} src={ik} onClick={handleInputSubmit}/>
      <Dropdown.Menu className='dropMenuBut' show={isDropdownOpen}>
        {options.map((option) => (
          <Dropdown.Item  onClick={() => handleOptionSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
        </Dropdown.Menu>
    </InputGroup>
  );
};

export default CustomDropdownInput;
