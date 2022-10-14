function calcular(freq){
    comprimento=299792458/freq //Calcula o comprimento de onda.
    cda.value = comprimento

    if(freq>=Math.pow(10,21)){
        tdr.value = "Raios gama de alta energia (≥10^21)"
    }else if(freq>=Math.pow(10,19)){
        tdr.value = "Raios gama (≥10^19)"
    }else if(freq>=Math.pow(10,17)){
        tdr.value = "Raio-X (≥10^17)"
    }else if(freq>=Math.pow(10,15)){
        tdr.value = "Ultravioleta (≥10^15)"
    }else if(freq>=Math.pow(10,13)){
        tdr.value = "Luz visível (≥10^13)"
    }else if(freq>=Math.pow(3.01,11)){
        tdr.value = "Infravermelho (≥3,01^11)"
    }else if(freq>=Math.pow(3,8)){
        tdr.value = "Micro-ondas (≥3^8)"
    }else if(freq<Math.pow(3,8)){
        tdr.value = "Rádio (<3^8)"
    } //Compara a frequência com os tipos de radiação.

    if(comprimento>Math.pow(10,24)){
        comparativo.value = "Universo visível (>10^26)"
    }else if(comprimento>=Math.pow(10,21)){
        comparativo.value = "Via Láctea (≥10^21)"
    }else if(comprimento>=Math.pow(10,18)){
        comparativo.value = "Galáxia espiral (≥10^18)"
    }else if(comprimento>=Math.pow(10,15)){
        comparativo.value = "1 ano-luz (≥10^15)"
    }else if(comprimento>=Math.pow(10,12)){
        comparativo.value = "Sistema Solar (≥10^12)"
    }else if(comprimento>=Math.pow(10,9)){
        comparativo.value = "Sol (≥10^9)"
    }else if(comprimento>=Math.pow(10,6)){
        comparativo.value = "Terra (≥10^6)"
    }else if(comprimento>=Math.pow(10,3)){
        comparativo.value = "Monte Everest (≥10^3)"
    }else if(comprimento>=Math.pow(10,0)){
        comparativo.value = "Ser humano (≥10^0)"
    }else if(comprimento>=Math.pow(10,-3)){
        comparativo.value = "Mosquito (≥10^-3)"
    }else if(comprimento>=Math.pow(10,-6)){
        comparativo.value = "Bactéria (≥10^-6)"
    }else if(comprimento>=Math.pow(10,-9)){
        comparativo.value = "Vírus (≥10^-9)"
    }else if(comprimento>=Math.pow(10,-12)){
        comparativo.value = "Átomo (≥10^-12)"
    }else if(comprimento>=Math.pow(10,-15)){
        comparativo.value = "Próton (≥10^-15)"
    }else if(comprimento<Math.pow(10,-15)){
        comparativo.value = "Elétron (<10^-15)"
    } //Compara o comprimento de onda com as ordens de grandeza.

    if(freq==0){
        alert("Insira um valor válido.");
        freq.value = ""
        tdr.value = ""
        cda.value = ""
        comparativo.value = ""
    }
}