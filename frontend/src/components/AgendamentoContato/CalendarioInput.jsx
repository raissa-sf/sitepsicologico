import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const CalendarioInput = ({ selectedDate, onChange }) => {
  const [unavailableDates, setUnavailableDates] = useState([]);

  
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; 
  };

  
  const isHoliday = (date) => {
    const holidays = [
      '2025-01-01', 
      '2025-12-25', 
    ];

    const dateString = date.toISOString().split('T')[0];
    return holidays.includes(dateString);
  };


  const isBookedDate = (date) => {
    const bookedDates = [
      '2025-05-01', 
    ];

    const dateString = date.toISOString().split('T')[0];
    return bookedDates.includes(dateString);
  };


  const filterDates = (date) => {
    if (isWeekend(date)) return false; 
    if (isHoliday(date)) return false; 
    if (isBookedDate(date)) return false; 
    return true; 
  };

  
  const highlightBookedDates = (date) => {
    return isBookedDate(date) ? 'highlight' : '';
  };

  return (
    <div className="calendario-container">
      <label htmlFor="data">Data da Consulta:</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecione uma data"
        id="data"
        name="data"
        className="calendario-input"
        filterDate={filterDates} 
        highlightDates={highlightBookedDates} 
        excludeDates={unavailableDates} 
      />
    </div>
  );
};

export default CalendarioInput;
