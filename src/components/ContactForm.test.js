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

    userEvent.type(firstNameInput, 'Stone');
    userEvent.type(lastNameInput, 'Cogswell');
    userEvent.type(emailInput, 'stone@cogswell.com');
    userEvent.type(messageInput, 'Hello World!');
    userEvent.click(submitBtn);

    const newFirstName = await screen.findByText(/Stone/i);
    const newLastName = await screen.findByText(/Cogswell/i);
    const newEmail = await screen.findByText(/stone@cogswell.com/i);
    const newMessage = await screen.findByText(/Hello World!/i);

    expect(newFirstName).toBeInTheDocument(/Stone/i);
    expect(newLastName).toBeInTheDocument(/Cogswell/i);
    expect(newEmail).toBeInTheDocument(/stone@cogswell.com/i);
    expect(newMessage).toBeInTheDocument(/Hello World!/i);
})