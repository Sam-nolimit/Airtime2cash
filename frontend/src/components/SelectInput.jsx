import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Form } from "../styles/ManageAccount";
import Select from "react-select";

const SelectInput = ({
  onChangeAction,
  label,
  selectionList,
  selectionDefault,
}) => {
  const selectOptions = selectionList.map((elem) => {
    return { value: elem.name, label: elem.name };
  });

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      padding: "0.4rem",
      fontSize: "14px",
      fontFamily: "Inter",
      "& select": {
        font: "Inter",
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      // fontWeight: "400",
    }),
    dropdownIndicator: (provided, state) => {
      return {
        ...provided,
        padding: "0px",
        paddingLeft: "0px",
        paddingTop: "0px",
        paddingRight: "30px",
        paddingDown: "0px",
        color: "black",
        cursor: "pointer",
      };
    },
  };

  return (
    //   <Form>
    //     <label htmlFor='bank' className='h-label'>{label}</label>
    //     <div className='select'>
    //         <select name='bank' onChange={onChangeAction} value={value}>
    //             <option value={''}>{selectionDefault}</option>
    //             {
    //                 selectionList.map((bank) => (
    //                     <option key={bank.id} value={`${bank.name}`}>{bank.name}</option>
    //                 ))
    //             }
    //         </select>
    //         <RiArrowDropDownLine size={'30'} style={{backgroundColor:'white', marginRight:'33px'}}/>

    //     </div>
    // </Form>
    <Form>
      <label htmlFor="bank" className="h-label">
        {label}
      </label>
      <div className="select">
        <Select
          defaultValue={selectionDefault}
          onChange={onChangeAction}
          options={selectOptions}
          styles={colorStyles}
          placeholder={selectionDefault}
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
    </Form>
  );
};

export default SelectInput;
