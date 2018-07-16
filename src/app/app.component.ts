import { Component } from '@angular/core';
import { NgTimelineModule } from 'ng-timeline';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date: any;
  meses: any [] = [{'number': 1, 'month': 'Enero' }, { 'number': 2 , 'month': 'Febrero' },
                   { 'number': 3, 'month': 'Marzo' }, { 'number': 4, 'month': 'Abril' },
                   { 'number': 5, 'month': 'Mayo' }, { 'number': 6 , 'month': 'Junio' },
                   { 'number': 7, 'month': 'Julio' }, { 'number': 8, 'month': 'Agosto' },
                   { 'number': 9, 'month': 'Septiembre' }, { 'number': 10, 'month': 'Octubre' },
                   { 'number': 11, 'month': 'Noviembre' }, { 'number': 12, 'month': 'Diciembre' }];

  days: any [] = [];

  public constructor(private httpClient: HttpClient) {
    // moment.locale();
    this.date =  moment().format();
    console.log('fecha -->> : ', this.date);
    /*console.log('data de la API -->> ', this.getData().subscribe( respuesta => {
      console.log('respuesta del subscribe -->> : ', respuesta);
    }));*/
    this.getData();
    console.log(this.meses);
    // this.setDays();
  }

  getData() {
    const observer = this.httpClient.get('http://nolaborables.com.ar/api/v2/feriados/2018').pipe(map((feriados: any) => feriados));
    observer.subscribe(feriados => {
      this.meses.forEach(m => {
        const feriadosMes = feriados.filter(feriado => feriado.mes === m.number);
        m['feriados'] = feriadosMes;
      });
    });
  }


}
