import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const Textarea = (props) => (
  <TextareaAutosize
    onBlur={
      (event) => props.updateApplicantField(
        props.applicant._id,
        event.target.name,
        event.target.value
      )
    }
    onChange={
      (event) => props.handleTextAreValueChange(
        event.target.name,
        event.target.value
      )
    }
    spellCheck="false"
    name={props.name}
    defaultValue={props.applicant[props.name]}
    placeholder="&#x270e; I am editable!"
    className={`applicant-${props.name} testclass`}>
  </TextareaAutosize>
);

export default Textarea;
