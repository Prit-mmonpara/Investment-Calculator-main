import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestments = '0';
  enteredAnnualInvestments = '0';
  enteredExpectedReturns = '5';
  enteredDurations = '10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestments,
      annualInvestment: +this.enteredAnnualInvestments,
      expectedReturn: +this.enteredExpectedReturns,
      duration: +this.enteredDurations
    });
  }
}
