import { Component } from '@angular/core';

@Component ({
    template: `
    <body>
        <div>
        <img class="notfound" src="./assets/404.jpeg">
        <h3 style="text-align: center;"><a routerLink="" routerLinkActive="active">Click here to return to the actual site!</a></h3>
        </div>
    </body>`,
    styles: [`
        .notfound {
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
      }
      body {
            background-color: #c8c8c8;
            width:100%;
            height:1080px;
            margin:0px;
        }
    `
    ]
})

export class NotFoundComponent {
    constructor() {
        $('#bike-builder-progress-bar').hide();
    }
}
