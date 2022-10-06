import React, { useCallback, useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const {tg} = useTelegram()

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

  const onSendData = useCallback(() => {
    const data = {
      select,
      country,
      street
    }

    tg.sendData(JSON.stringify(data))
  }, [ country, select, street, tg])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)

    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  useEffect(() => {
    if(!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }

    tg.MainButton.setParams({
      text: "Отправить данные"
    })
  }, [country, street, tg.MainButton])

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
