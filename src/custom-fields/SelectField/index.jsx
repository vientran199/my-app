import { ErrorMessage } from "formik"
import { FormFeedback, FormGroup, Input, Label } from "reactstrap"
import PropTypes from 'prop-types';
import ReactSelect from "react-select";

const SelectField = (props) => {
  const { field, form, lable, placeholder, disabled, options } = props
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }
  return (
    <FormGroup>
      {lable && <Label for={name}>{lable}</Label>}
      <ReactSelect
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}

        disabled={disabled}
        placeholder={placeholder}

        options={options}
      ></ReactSelect>
      <div className={showError ? 'is-invalid' : ''}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}
export default SelectField
SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

SelectField.defaultProps = {
  options: [],
  label: '',
  placeholder: '',
  disabled: false,
}