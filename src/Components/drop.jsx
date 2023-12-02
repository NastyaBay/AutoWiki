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


/*
import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ik from '/public/img/ik.svg'

//функция для выбора и отображения варианта в кнопке на главной странице
function CustomDropdownButton({name}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <DropdownButton className='homeDrop'
        id="dropdown-basic-button"
        title = {selectedOption? (<><div className='button-text fontRubbik20'><span>{selectedOption}</span><img className='ik' src={ik}/></div></>)
        :(<><div className='button-text fontRubbik20'><span>{name}</span><img className='ik' src={ik}/></div></>)}
        
      >
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 1')}>Вариант 1</Dropdown.Item>
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 2')}>Вариант 2</Dropdown.Item>
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 3')}>Вариант 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdownButton;*/

/*
import React, { useState } from 'react';
import { FormControl, Dropdown, InputGroup } from 'react-bootstrap';

const CustomDropdownInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(['Вариант 1', 'Вариант 2', 'Вариант 3']);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSelectedOption(null); // Сброс выбранного варианта при вводе своего значения
    setDropdownOpen(true); // Открываем выпадающий список при вводе
  };

  const handleOptionSelect = (option) => {
    setInputValue('');
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() !== '') {
      setOptions([...options, inputValue]);
      setSelectedOption(inputValue);
      setInputValue('');
      setDropdownOpen(false);
    }
  };

  return (
    <InputGroup className="mb-43">
      <FormControl
        placeholder="Марка"
        value={selectedOption || inputValue}
        onChange={handleInputChange}
      />
      <Dropdown show={isDropdownOpen} as={InputGroup.Append}>
        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </InputGroup>
  );
};

export default CustomDropdownInput;*/


/*<DropdownButton className='homeDrop'
        id="dropdown-basic-button"
        title={selectedOption || <><div className='button-text fontRubbik20'><span>{name}</span><img className='ik' src={ik}/></div></>}
      > */


      /*<DropdownButton className='homeDrop'
        id="dropdown-basic-button"
        title={
          selectedOption || (
            <InputGroup>
              <FormControl
                placeholder="Введите что-то"
                aria-label="Введите что-то"
                aria-describedby="basic-addon2"
                value={inputValue}
                onChange={handleInputChange}
              />
              <InputGroup.Append>
                <div className='button-text fontRubbik20'>
                  <span>{name}</span><img className='ik' src={ik}/>
                </div>
              </InputGroup.Append>
            </InputGroup>
          )
        }
      > */