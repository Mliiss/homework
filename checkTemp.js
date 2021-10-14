let temperatuur = 0;

function checkTemp(temperatuur) {
    if (temperatuur >= 0 && temperatuur <= 20 ) {
        return -1;
    }  else if (temperatuur <= 40 ) {
        return 0;
    }  else if(temperatuur <= 60 ) {
        return 1;
    }
    }
