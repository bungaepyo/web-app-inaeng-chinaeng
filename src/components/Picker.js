import React, { useState } from "react";
import { TimePicker, DatePicker } from "@material-ui/pickers";
import { Typography, makeStyles } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  selectDate: {
    fontSize: "17px",
    color: "#828282",
  },

  selectTime: {
    fontSize: "25px",
    color: "#6DB4F7",
  },

  amPm: {
    fontSize: "25px",
    color: "#828282",
    marginLeft: "5px",
  },

  timeTypography: {
    display: "flex",
  },
});

function InlineTimePicker() {
  const [selectedTime, handleTimeChange] = useState(new Date());
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const hour24 = new Date(selectedTime).getHours()
  const hour12 = hour24<=12 ? hour24 : hour24 -12 
  const min60  = new Date(selectedTime).getMinutes()
  const minute = min60<10 ? "0" + min60 : min60
  const amPm = hour24<12 ? 'AM' : 'PM'

  return (
    <div className={classes.container}>
        <div className={classes.timeTypography}>
            <div>
                <Typography className={classes.selectTime}
                            onClick={() => setIsOpen(true)}>
                        {hour12 + ":" + minute}
                </Typography>
            </div>
            <div>
                <Typography className={classes.amPm}>
                        {amPm}
                </Typography>
            </div>
        </div>

        <TimePicker
            variant="normal"
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            format="d MMM yyyy"
            value={selectedTime}
            onChange={handleTimeChange}
            TextFieldComponent={() => null}
        />
    </div>
  );
}

function InlineDatePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    let weekdayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekday = weekdayList[new Date(selectedDate).getDay()]

    let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthList[new Date(selectedDate).getMonth()]
    
    const day = new Date(selectedDate).getDate()

    const year = new Date(selectedDate).getFullYear()
  
    return (
      <div className={classes.container}>
        <Typography className={classes.selectDate}>
                {weekday + ", " + month + " " + day + ", " + year}
                <IconButton 
                    onClick={() => setIsOpen(true)}>
                    <CalendarTodayIcon fontSize="small" style={{ color: blue[300] }}/>
                </IconButton>
        </Typography>
  
        <DatePicker
            variant="normal"
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            format="d MMM yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            TextFieldComponent={() => null}
        />
      </div>
    );
  }

export {InlineTimePicker, InlineDatePicker};