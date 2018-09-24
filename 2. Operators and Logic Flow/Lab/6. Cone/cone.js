function coneVolumeArea(radius, height) {
    console.log(`volume = ${((Math.PI * radius ** 2) * height / 3).toFixed(4)}`);
    console.log(`area = ${((Math.PI * radius) * (radius + Math.sqrt(height ** 2 + radius ** 2))).toFixed(4)}`);
}

coneVolumeArea(3, 5);
coneVolumeArea(3.3, 7.8);