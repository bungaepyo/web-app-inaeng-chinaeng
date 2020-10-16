import React, {useState} from "react";
import { FormControl } from "react-bootstrap";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{color : "#6DB4F7", fontSize:"18px"}}
      href=" "
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <ExpandMoreIcon/>
    </a>
  ));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().includes(value),
            )}
          </ul>
        </div>
      );
    },
);

export {CustomMenu, CustomToggle};