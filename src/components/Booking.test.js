import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom/extend-expect';
import { isDisabled } from '@testing-library/user-event/dist/utils';

describe('BookingForm component', () => {
    test('option one', () => {
        const initialState = {dates: {
            option1: "17:00",
            option2: "18:00",
            option3: "19:00",
            option4: "20:00",
            option5: "21:00",
            option6: "22:00",
        }}
      render(<BookingForm state={initialState}/>);
      const option = screen.queryByText('17:00');
      expect(option).toBeInTheDocument();
    });
    test('submit', () => {
        const initialState = {dates: {
            option1: "17:00",
            option2: "18:00",
            option3: "19:00",
            option4: "20:00",
            option5: "21:00",
            option6: "22:00",
        }}
        render(<BookingForm state={initialState}/>);
        const btn = screen.queryByRole('button')
        expect(btn).toBeDefined()
        if(btn){
            console.log(btn)
        }
        expect(btn).not.toHaveAttribute('disabled')
        expect(btn).toBeEnabled()

        fireEvent.submit(btn);
        expect(onsubmit).toHaveBeenCalled;
    });
    test('celebration', () => {
        const initialState = {dates: {
            option1: "17:00",
            option2: "18:00",
            option3: "19:00",
            option4: "20:00",
            option5: "21:00",
            option6: "22:00",
        }}
        render(<BookingForm state={initialState}/>);
        const cel = screen.queryByText('Birthday');
        expect(cel).toBeInTheDocument()
  })
})
