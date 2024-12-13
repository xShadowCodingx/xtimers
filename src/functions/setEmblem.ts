// This function sets the emblem from the option

import HollyLeaf from '../assets/holly_leaf.png';
import BirthdayCake from '../assets/birthday_cake.png';
import Firework from '../assets/firework.png';
import Exclamation from '../assets/exclamation_mark.png';
import Heart from '../assets/heart.png';
import Balloons from '../assets/balloons.png';

function setEmblem(option: any) {
    switch (option) {
        case "1":
            return HollyLeaf;
        case "2":
            return BirthdayCake;
        case "3":
            return Firework;
        case "4":
            return Exclamation;
        case "5":
            return Heart;
        case "6":
            return Balloons;
        default:
            return null;
    };
};

export default setEmblem;