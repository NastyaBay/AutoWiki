import React, { useState } from 'react';
import { Dropdown, DropdownButton, InputGroup, FormControl  } from 'react-bootstrap';
import ik from '/public/img/ik.png'


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
        title={selectedOption || <><div className='button-text fontRubbik20'><span>{name}</span><img className='ik' src={ik}/></div></>}
      >
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 1')}>Вариант 1</Dropdown.Item>
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 2')}>Вариант 2</Dropdown.Item>
        <Dropdown.Item className='itemButton' onClick={() => handleOptionSelect('Вариант 3')}>Вариант 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdownButton;

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