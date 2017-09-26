import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(input: string, args: any[]): any {
        input = input.toLowerCase();
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
