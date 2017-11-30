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
    customize: Array<string>;
    accessories: Array<string>;
    extras: Array<string>;
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
            this.rs += '\nCustom options: ' + this.customize.length;
        }
        if (this.accessories) {
            this.rs += '\nAccessories: ' + this.accessories.length;
        }
        if (this.extras) {
            this.rs += '\nExtras: ' + this.extras.length;
        }
        if (this.totalPrice) {
            this.rs += '\nTotal Price: €' + this.totalPrice;
        }
        return this.rs;
    }
}
