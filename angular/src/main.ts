/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


var numeros = [1, 2, 3];
numeros.map(valor => valor * 2);

var palavra: string = 'asfasfasfa';

var palavra2: any = 'asfasfasfa'; // ou var palavra2 = "afafasfa" sem o any
