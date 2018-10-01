function movieTheater([film, day]) {
    switch (day.toLowerCase()) {
        case"monday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 12;
                case"schindler's list":
                    return 8.5;
                case"casablanca":
                    return 8;
                case"the wizard of oz":
                    return 10;
                default:
                    return "error";
            }
        case"tuesday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 10;
                case"schindler's list":
                    return 8.5;
                case"casablanca":
                    return 8;
                case"the wizard of oz":
                    return 10;
                default:
                    return "error";
            }
        case"wednesday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 15;
                case"schindler's list":
                    return 8.5;
                case"casablanca":
                    return 8;
                case"the wizard of oz":
                    return 10;
                default:
                    return "error";
            }
        case"thursday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 12.5;
                case"schindler's list":
                    return 8.5;
                case"casablanca":
                    return 8;
                case"the wizard of oz":
                    return 10;
                default:
                    return "error";
            }
        case"friday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 15;
                case"schindler's list":
                    return 8.5;
                case"casablanca":
                    return 8;
                case"the wizard of oz":
                    return 10;
                default:
                    return "error";
            }
        case"saturday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 25;
                case"schindler's list":
                    return 15;
                case"casablanca":
                    return 10;
                case"the wizard of oz":
                    return 15;
                default:
                    return "error";
            }
        case"sunday":
            switch (film.toLowerCase()) {
                case"the godfather":
                    return 30;
                case"schindler's list":
                    return 15;
                case"casablanca":
                    return 10;
                case"the wizard of oz":
                    return 15;
                default:
                    return "error";
            }
        default:
            return "error";
    }
}

movieTheater(["Godfather", "Friday"]);
movieTheater(["casablanca", "sunday"]);
movieTheater(["Schindler's", "monday"]);
movieTheater(["SoftUni", "nineday"]);