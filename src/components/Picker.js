import React, { Fragment, useState } from "react";
import { TimePicker, DatePicker } from "@material-ui/pickers";

function InlineTimePicker() {
  const [selectedTime, handleTimeChange] = useState(new Date());

  return (
    <Fragment>
      <TimePicker
        variant="inline"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </Fragment>
  );
}

function InlineDatePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());
  
    return (
      <Fragment>
        <DatePicker
          variant="inline"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Fragment>
    );
  }

export {InlineTimePicker, InlineDatePicker};