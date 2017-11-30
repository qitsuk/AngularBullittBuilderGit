import { Injectable, Component } from '@angular/core';

@Component({
    selector: 'app-bike-component',
    template: ``
})

@Injectable()
export class BikeComponent {
    frame: string;
    color: string;
    drivetrain: string;
    customize: Array<string> = new Array<string>();
    accessories: Array<string> = new Array<string>();
    extras: Array<string> = new Array<string>();
    totalPrice = 0;

    rs = 'Your order';

    toString() {
        if (this.frame) {
            this.rs += '\nSelected Frame: ' + this.frame;
        }
        if (this.color) {
            this.rs += '\nColor: ' + this.color;
        }
        if (this.drivetrain) {
            this.rs += '\nDrivetrain: ' + this.drivetrain;
        }
        if (this.customize) {
            this.rs += '\nCustom options: ';
            for (let i = 0; i < this.customize.length; i++) {
                this.rs += '\n' + this.customize[i] + '\n';
            }
        }
        if (this.accessories) {
            this.rs += '\nAccessories: ';
            for (let i = 0; i < this.accessories.length; i++) {
                this.rs += '\n' + this.accessories[i] + '\n';
            }
        }
        if (this.extras) {
            this.rs += '\nExtras: ';
            for (let i = 0; i < this.extras.length; i++) {
                this.rs += '\n' + this.extras[i] + '\n';
            }
        }
        return this.rs;
    }
}
