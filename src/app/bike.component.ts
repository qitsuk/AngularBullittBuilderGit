import { Injectable, Component } from '@angular/core';

@Component({
    selector: 'app-bike-component',
    template: ``
})

@Injectable()
export class BikeComponent {
    frame = {
        price: 0,
        type: ''
    };
    color: string;

    drivetrain = {
        price: 0,
        type: ''
    };
    bbx = {
        price: 354,
        color: ''
    };
    billboard = {
        price: 69,
        color: ''
    };
    customize: Array<string> = new Array<string>();
    accessories: Array<string> = new Array<string>();
    extras: Array<string> = new Array<string>();
    allParts: Array<string> = new Array<string>();
    totalPrice = 0;

    toString() {
        this.allParts.push('Your Order: ');
        if (this.frame) {
            this.allParts.push(this.frame.type);
        }
        if (this.color) {
            this.allParts.push('Color: ');
            this.allParts.push(this.color);
        }
        if (this.drivetrain) {
            this.allParts.push(this.drivetrain.type);
        }
        if (this.customize) {
            this.allParts.push('Custom Options: ');
            for (let i = 0; i < this.customize.length; i++) {
                this.allParts.push(this.customize[i]);
            }
        }
        if (this.accessories) {
            this.allParts.push('Accessories: ');
            for (let i = 0; i < this.accessories.length; i++) {
                this.allParts.push(this.accessories[i]);
            }
        }
        if (this.extras) {
            this.allParts.push('Extras: ');
            for (let i = 0; i < this.extras.length; i++) {
                this.allParts.push(this.extras[i]);
            }
        }
        return this.allParts;
    }
    getTotalPrice() {
        let totalPrice = 0;
        totalPrice += this.frame.price;
        totalPrice += this.drivetrain.price;
        return totalPrice;
    }
}

