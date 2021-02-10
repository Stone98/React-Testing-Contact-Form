import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('render ContactForm without errors', () => {
    render(<ContactForm />);
});

test('type in inputs, click submit and values appear on screen', async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(emailInput, 'john@doe.com');
    userEvent.type(messageInput, 'Hello World!');
    userEvent.click(submitBtn);

    const newFirstName = await screen.findByText(/John/i);
    const newLastName = await screen.findByText(/Doe/i);
    const newEmail = await screen.findByText(/john@doe.com/i);
    const newMessage = await screen.findByText(/Hello World!/i);

    expect(newFirstName).toBeInTheDocument(/John/i);
    expect(newLastName).toBeInTheDocument(/Doe/i);
    expect(newEmail).toBeInTheDocument(/john@doe.com/i);
    expect(newMessage).toBeInTheDocument(/Hello World!/i);
})