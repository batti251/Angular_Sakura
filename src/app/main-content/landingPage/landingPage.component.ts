import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
//(decorater)
@Component({ //@ ist typescriptspezifisch!
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <div><app-navbar></app-navbar></div>
        <h1>SAKURA RAMEN</h1>
        <h2>BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']

}) 
//export um es überall zur Verfügung zu stellen 
export class LandingPageComponent{

}