import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  sex: Yup.string()
    .oneOf([
      'm',
      'f'
    ], '')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  fname: Yup.string()
    .required('Required'),
  lname: Yup.string()
    .required('Required'),
  height: Yup.number()
    .required('Required'),
  weight: Yup.number()
    .required('Required'),
});
