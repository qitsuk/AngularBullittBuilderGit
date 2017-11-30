import { Injectable } from '@angular/core';


@Injectable()
export class Bike {
    frame: string;
    color: string;
    drivetrain: string;
    customize: Array<string>;
    accessories: Array<string>;
    extras: Array<string>;
    totalPrice: number;
}
