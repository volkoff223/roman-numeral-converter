function convertToRoman(num) {
    //convert num to an array
    let arr = num.toString().split('').map(Number);
    let rom = [];
    //convert 1000's place(FINISHED)
    let M = "M".repeat(arr[arr.length-4]);
    rom.push(M)

    //convert 100's place
    let C = arr[arr.length-3];
    if (C <= 3){
        rom.push("C".repeat(C));
    } else if (C == 4){
        rom.push("CD");
    } else if (C <= 8) {
        rom.push("D"+"C".repeat(C-5));
    } else if (C == 9){
        rom.push("CM");
    }

    //convert 10's place
    let X = arr[arr.length-2];
    if (X <= 3){
        rom.push("X".repeat(X));
    } else if (X == 4){
        rom.push("XL");
    } else if (X <= 8) {
        rom.push("L"+"X".repeat(X-5));
    } else if (X == 9){
        rom.push("XC");
    }
    //convert 1's place
    let I = arr[arr.length-1];
    if (I <= 3){
        rom.push("I".repeat(I));
    } else if (I == 4){
        rom.push("IV");
    } else if (I <= 8) {
        rom.push("V"+"I".repeat(I-5));
    } else if (I == 9){
        rom.push("IX");
    }
    console.log(rom.join(''));
}
   
   convertToRoman(3333);
