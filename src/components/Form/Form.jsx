import React, { useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from "../useTelegram";

const Form = (props) => {
  const [country, setCountry] = useState(null)
  const [street, setStreet] = useState(null)
  const [select, setSelect] = useState(null)

  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const onChangeStreet = (event) => {
    setStreet(event.target.value)
  }

  const onChangeSelect = (event) => {
    setSelect(event.target.value)
  }

  const {tg} = useTelegram()

  useEffect(() => {
    if(street || country) {
      tg.MainButton.show()
    } else {
      tg.MainButton.hide()
    }

    tg.MainButton.setParams({
      text: "Отправить данные"
    })
  }, [country, street])

  return (
    <div className="form">
      <h3>Введите данные</h3>

      <input
        type="text"
        className="input"
        placeholder="Страна"
        onInput={onChangeCountry}
        value={country}
      />

      <input
        type="text"
        className="input"
        placeholder="Улица"
        onInput={onChangeStreet}
        value={street}
      />

      <select
        name="select"
        className="select"
        onInput={onChangeSelect}
        value={select}
      >
        <option value="physic">Физ лицо</option>
        <option value="company">Юр лицо</option>
      </select>
    </div>
  );
};

export default Form;
