import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculoimcangular';
  kilos = 0;
  metros = 0;
  type = { type: '', obesity: 0, value: 0, isCalculated: false };

  imcTypes = [
    {
      min: 0,
      max: 18.59999999999999,
      type: 'MAGREZA',
      obesity: 0,
    },
    {
      min: 18.6,
      max: 24.999999999999999,
      type: 'NORMAL',
      obesity: 0,
    },
    {
      min: 25,
      max: 29.999999999999999,
      type: 'SOBREPESO',
      obesity: 1,
    },
    {
      min: 30,
      max: 39.999999999999999,
      type: 'OBESIDADE',
      obesity: 2,
    },
    {
      min: 40,
      max: 9999999,
      type: 'OBESIDADE GRAVE',
      obesity: 3,
    },
  ];

  checkNull = () => {
    return (
      this.kilos > 0 &&
      this.kilos !== undefined &&
      this.metros > 0 &&
      this.metros !== undefined
    );
  };

  calculateIMC = () => {
    const { kilos, metros } = this;
    console.log(kilos, metros);
    const imcValue = kilos / (metros * metros);
    console.log(imcValue);
    const result = this.imcTypes.find((imcType) => {
      return imcValue >= imcType.min && imcValue <= imcType.max;
    });

    this.type = {
      isCalculated: true,
      type: result?.type || '',
      obesity: result?.obesity || 0,
      value: imcValue,
    };
  };

  changeHandler = () => {
    console.log('champour');
    if (this.checkNull()) {
      this.calculateIMC();
    }
  };
}
