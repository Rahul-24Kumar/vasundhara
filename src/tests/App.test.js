import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactUs from '../components/ContactUs';
import axios from '../api/axiosConfig';
import { toast } from 'react-toastify';

jest.mock('../api/axiosConfig');
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('ContactUs Component', () => {
  test('submits form and displays success message', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true, message: 'Message received successfully' } });

    render(<ContactUs />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });

    fireEvent.click(screen.getByText(/send message/i));

    expect(axios.post).toHaveBeenCalledWith('/contact', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there!',
    });

    expect(toast.success).toHaveBeenCalledWith('Successfully message sent!', { autoClose: 1000 });
  });

  test('displays error message on form submission failure', async () => {
    axios.post.mockRejectedValueOnce(new Error('Network Error'));

    render(<ContactUs />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });

    fireEvent.click(screen.getByText(/send message/i));

    expect(axios.post).toHaveBeenCalledWith('/contact', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there!',
    });

    expect(toast.error).toHaveBeenCalledWith('Message failed!', { autoClose: 1000 });
  });
});
