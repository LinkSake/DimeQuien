function checkCombination (dL, dF){

    if (dF == 6 ) {
        switch (dL) {
            case 12:
                return 'distrits/6_12.html';
                break;
            case 15:
                //window.location.href = 'districts/template.html';
                return 'districts/template.html';
                //return 'distrits/6_15.html';
                break;
            case 16:
                return 'distrits/6_16.html';
                break;
            case 17:
                return 'distrits/6_17.html';
                break;
            case 18:
                return 'distrits/6_18.html';
                break;
            default:
                break;
        }
    }

    if (dF == 8) {
        switch (dL) {
            case 12:
                return 'distrits/8_12.html';
                break;
            case 15:
                return 'distrits/8_15.html';
                break;
            case 16:
                return 'distrits/8_16.html';
                break;
            case 17:
                return 'distrits/8_17.html';
                break;
            case 18:
                return 'distrits/8_18.html';
                break;
            default:
                break;
        }
    } 
}