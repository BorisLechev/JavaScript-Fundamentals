function roadRadar([speed, area]) {
    let zoneLimit = getLimit(area);
    let infraction = getInfraction(speed, zoneLimit);

    if (infraction) {
        console.log(infraction);
    }

    function getLimit(area) {
        switch (area) {
            case"city":
                return 50;
            case"residential":
                return 20;
            case"interstate":
                return 90;
            case "motorway":
                return 130;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed > 0 && overSpeed <= 20) {
            return "speeding";
        } else if (overSpeed > 20 && overSpeed <= 40) {
            return "excessive speeding";
        } else if (overSpeed > 40) {
            return "reckless driving";
        } else {
            return false;
        }
    }
}

roadRadar([40, "city"]);
roadRadar([21, "residential"]);
roadRadar([120, "interstate"]);
roadRadar([200, "motorway"]);