import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../api/axiosConfig';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/auth/reset-password', {
          token,
          newPassword: values.newPassword
        });
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          type="password"
          {...formik.getFieldProps('newPassword')}
        />
        {formik.touched.newPassword && formik.errors.newPassword ? (
          <div>{formik.errors.newPassword}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...formik.getFieldProps('confirmPassword')}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
