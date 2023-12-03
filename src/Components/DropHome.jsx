
import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ik from '/public/img/ik.svg'
import './DropHome.css'

const options  = ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'];

//функция для выбора и отображения варианта в кнопке на главной странице
function CustomDropdownButton({name}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleOpening = () =>{
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <div>
      <DropdownButton className='homeDrop'
        id="dropdown-basic-button"
        title = {selectedOption? (
        <><div className='button-text fontRubbik20'>{selectedOption}<img className={`ik ${isDropdownOpen ? 'rotate' : ''}`} src={ik}/></div></>)
        :(<><div className='button-text fontRubbik20'>{name}<img className={`ik ${isDropdownOpen ? 'rotate' : ''}`} src={ik}/></div></>)}
          onClick={handleOpening}
      >
        {options.map((option) => (
          <Dropdown.Item  className='itemButton' onClick={() => handleOptionSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default CustomDropdownButton;




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