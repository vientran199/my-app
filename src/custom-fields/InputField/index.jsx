import { ErrorMessage } from "formik"
import { FormFeedback, FormGroup, Input, Label } from "reactstrap"
import PropTypes from 'prop-types';

const InputField = (props) => {
    const {field,form,type,lable,placeholder,disabled} = props
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {lable && <Label for={name}>{lable}</Label>}
            <Input 
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}

                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}
export default InputField

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}