import { PHOTO_CATEGORY_OPTIONS } from "constants/global"
import InputField from "custom-fields/InputField"
import RandomPhotoField from "custom-fields/RandomPhotoField"
import SelectField from "custom-fields/SelectField"
import { FastField, Form, Formik } from "formik"
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap"
import * as Yup from 'yup'
import PropTypes from 'prop-types';

const PhotoForm = (props) => {
    const {onSubmit,initialValues,isAddMode} = props
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        categoryId: Yup.number().required('This field is required.').nullable(),
        photo: Yup.string().when('categoryId',{
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise:Yup.string().notRequired()
        }),
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => {
                //do something here...
                const { values, errors, touched,isSubmitting } = formikProps
                console.log(values, errors, touched)
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            lable="Title"
                            placeholder="Enter text..."
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            lable="Category"
                            placeholder="Choice"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            lable="Photo"
                        />
                        <FormGroup>
                            {isSubmitting && <Spinner size={'sm'}/>}
                            <Button type="submit" color="primary">{isAddMode ? 'Add' : 'Edit'} a photo</Button>
                        </FormGroup>
                    </Form>
                )
            }
            }
        </Formik>
    )
}
PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps={
    onSubmit:null
}
export default PhotoForm