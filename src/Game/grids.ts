/* FACIT FÖR GRIDSYSTEM:
10 = svart vägg
11 = block / vägg
12= ingång
13 = öl
14 = välling (formula)
15 = bebis
16 = klocka
17 = utgång
18 = Spöke
20 = tom ruta */

class GridLevels {
    public numberGridLevels: number[][][];

    constructor() {
        this.numberGridLevels = [
            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 14, 14, 20, 13, 20, 20, 14, 20, 20, 20, 20, 20, 20, 11, 14, 11, 11, 20, 14, 20, 20, 18, 20, 10],
            [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 14, 20, 20, 20, 11, 11, 11, 11, 20, 20, 14, 10],
            [10, 20, 20, 20, 20, 20, 20, 11, 20, 20, 20, 20, 11, 20, 11, 20, 20, 20, 20, 14, 11, 20, 11, 20, 10],
            [10, 20, 11, 11, 11, 20, 20, 11, 20, 11, 11, 11, 11, 11, 11, 20, 11, 11, 11, 14, 11, 20, 11, 20, 10],
            [10, 14, 11, 20, 11, 20, 14, 11, 16, 11, 20, 20, 20, 20, 11, 20, 20, 13, 11, 11, 11, 20, 11, 20, 10],
            [10, 20, 11, 14, 11, 20, 20, 11, 20, 11, 20, 14, 11, 20, 11, 20, 20, 20, 11, 20, 20, 13, 11, 20, 10],
            [10, 20, 11, 20, 11, 20, 20, 11, 20, 11, 11, 11, 11, 20, 11, 14, 16, 20, 11, 20, 11, 11, 11, 11, 10],
            [10, 20, 11, 20, 11, 20, 20, 11, 20, 20, 20, 20, 20, 14, 11, 11, 11, 20, 11, 20, 11, 20, 20, 20, 17], 
            [10, 20, 11, 20, 11, 11, 20, 11, 11, 11, 11, 11, 11, 11, 11, 20, 11, 13, 11, 20, 11, 20, 11, 14, 10],
            [10, 20, 11, 20, 20, 20, 20, 20, 20, 20, 11, 20, 11, 20, 11, 20, 11, 20, 11, 20, 11, 14, 11, 20, 10],
            [10, 20, 11, 20, 11, 20, 14, 13, 11, 20, 11, 20, 11, 20, 11, 20, 20, 20, 20, 20, 11, 13, 11, 20, 10],
            [10, 20, 11, 20, 11, 11, 11, 11, 11, 20, 20, 20, 20, 20, 20, 20, 11, 20, 11, 20, 11, 11, 11, 20, 10],
            [10, 15, 11, 16, 11, 20, 14, 20, 20, 20, 11, 11, 13, 11, 20, 20, 11, 20, 14, 20, 20, 20, 20, 20, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            ],

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 20, 11, 16, 14, 11, 20, 20, 20, 11, 20, 20, 20, 20, 20, 11, 11, 11, 11, 20, 20, 14, 11, 20, 10],
            [10, 14, 11, 20, 20, 20, 14, 20, 20, 20, 20, 11, 20, 20, 11, 11, 20, 14, 11, 20, 20, 20, 11, 20, 17],
            [10, 20, 11, 13, 11, 11, 11, 11, 11, 20, 11, 11, 11, 20, 14, 11, 20, 20, 20, 20, 20, 11, 11, 20, 10],
            [10, 20, 11, 20, 11, 14, 11, 20, 11, 14, 11, 14, 11, 20, 11, 11, 13, 11, 11, 11, 14, 11, 13, 14, 10],
            [10, 20, 20, 20, 11, 14, 11, 20, 11, 11, 11, 20, 11, 20, 20, 11, 20, 20, 20, 11, 20, 11, 20, 11, 10],
            [10, 11, 11, 11, 11, 13, 20, 20, 20, 20, 20, 20, 20, 20, 20, 11, 14, 20, 20, 11, 20, 11, 14, 11, 10],
            [10, 20, 11, 14, 11, 11, 11, 11, 20, 20, 11, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 11, 20, 11, 10],
            [10, 14, 11, 20, 11, 20, 13, 20, 20, 20, 20, 11, 20, 20, 20, 11, 20, 20, 16, 11, 14, 11, 20, 20, 10],
            [10, 20, 20, 20, 11, 14, 20, 20, 20, 11, 11, 11, 20, 20, 20, 11, 20, 11, 11, 11, 20, 11, 20, 20, 10],
            [10, 20, 11, 20, 11, 11, 11, 11, 20, 11, 20, 20, 20, 20, 20, 11, 20, 20, 20, 20, 20, 11, 20, 11, 10],
            [10, 20, 11, 20, 20, 20, 20, 20, 20, 11, 20, 20, 11, 20, 13, 20, 20, 20, 11, 11, 20, 11, 20, 11, 10],
            [10, 20, 11, 20, 11, 11, 11, 20, 20, 11, 11, 20, 11, 11, 11, 11, 20, 18, 11, 14, 20, 20, 20, 20, 10],
            [10, 15, 11, 20, 11, 14, 20, 20, 20, 11, 16, 20, 20, 20, 20, 11, 14, 20, 11, 11, 11, 11, 11, 11, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            ],

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 15, 20, 14, 20, 16, 11, 20, 14, 20, 20, 20, 13, 20, 20, 14, 20, 20, 20, 20, 20, 20, 18, 20, 10],
            [10, 11, 11, 11, 11, 20, 11, 20, 11, 20, 11, 20, 11, 11, 11, 11, 11, 11, 20, 11, 11, 11, 11, 14, 10],
            [10, 20, 20, 20, 20, 20, 20, 20, 11, 20, 11, 20, 11, 14, 20, 20, 11, 20, 20, 20, 11, 14, 11, 20, 10],
            [10, 20, 11, 11, 11, 11, 11, 20, 11, 14, 11, 14, 11, 11, 11, 20, 11, 20, 11, 14, 11, 20, 11, 14, 10],
            [10, 20, 13, 20, 20, 14, 11, 14, 11, 20, 11, 20, 11, 20, 11, 13, 11, 14, 11, 20, 11, 20, 11, 20, 10],
            [10, 20, 11, 11, 11, 11, 11, 20, 11, 20, 11, 20, 20, 14, 20, 20, 11, 20, 11, 20, 20, 20, 11, 16, 10],
            [10, 14, 11, 20, 20, 20, 20, 20, 11, 18, 11, 11, 11, 11, 11, 20, 11, 20, 11, 11, 11, 20, 11, 11, 10],
            [10, 20, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 20, 20, 20, 20, 20, 20, 13, 20, 20, 20, 11, 20, 10],
            [10, 13, 11, 20, 11, 20, 20, 20, 20, 20, 11, 20, 11, 11, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 10],
            [10, 20, 11, 20, 11, 13, 11, 11, 11, 13, 11, 20, 11, 14, 11, 14, 11, 20, 20, 20, 11, 20, 11, 20, 10],
            [10, 14, 11, 20, 11, 20, 11, 14, 20, 20, 20, 20, 11, 20, 11, 20, 11, 20, 11, 16, 11, 14, 11, 20, 10],
            [10, 11, 11, 20, 11, 20, 11, 11, 11, 20, 11, 11, 11, 20, 11, 20, 11, 14, 11, 11, 11, 20, 20, 20, 10],
            [10, 14, 20, 20, 11, 14, 11, 14, 20, 20, 11, 16, 14, 20, 13, 20, 11, 20, 20, 13, 20, 20, 20, 20, 17],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            ],

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 20, 13, 20, 20, 20, 20, 20, 20, 14, 20, 14, 11, 14, 20, 20, 20, 20, 14, 20, 11, 14, 18, 20, 10],
            [10, 20, 11, 11, 11, 11, 11, 13, 11, 11, 11, 11, 11, 20, 11, 11, 11, 20, 11, 20, 11, 11, 11, 13, 10],
            [10, 20, 11, 20, 13, 20, 11, 20, 20, 20, 20, 20, 20, 20, 20, 14, 11, 20, 11, 20, 14, 20, 20, 20, 10],
            [10, 14, 11, 20, 11, 14, 11, 20, 11, 11, 11, 11, 11, 20, 11, 11, 11, 20, 11, 11, 11, 20, 11, 20, 10],
            [10, 20, 11, 20, 11, 20, 11, 14, 11, 20, 14, 20, 11, 20, 20, 13, 13, 20, 20, 11, 13, 20, 11, 14, 10],
            [10, 14, 11, 20, 11, 14, 11, 20, 11, 20, 11, 20, 11, 20, 20, 11, 11, 11, 20, 11, 20, 11, 11, 20, 10],
            [10, 11, 11, 20, 11, 20, 11, 14, 11, 20, 11, 16, 11, 20, 20, 14, 14, 11, 20, 11, 20, 14, 11, 20, 10],
            [10, 20, 20, 14, 11, 20, 11, 20, 11, 20, 11, 11, 11, 20, 20, 11, 11, 11, 20, 11, 11, 20, 11, 20, 17],
            [10, 20, 11, 11, 11, 20, 11, 20, 11, 14, 20, 20, 13, 20, 20, 20, 20, 20, 20, 11, 14, 20, 11, 20, 10],
            [10, 20, 11, 20, 14, 20, 13, 20, 11, 11, 11, 11, 11, 20, 11, 11, 11, 11, 20, 11, 20, 11, 11, 16, 10],
            [10, 20, 11, 20, 11, 11, 11, 11, 11, 20, 20, 20, 20, 20, 11, 20, 14, 11, 20, 11, 20, 14, 11, 20, 10],
            [10, 20, 11, 20, 11, 20, 20, 20, 13, 20, 20, 11, 11, 20, 11, 20, 11, 11, 20, 11, 11, 11, 11, 20, 10],
            [10, 15, 11, 16, 11, 14, 11, 14, 11, 20, 20, 14, 20, 20, 11, 14, 20, 13, 20, 14, 20, 14, 20, 13, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],   
            ], 

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 15, 20, 20, 20, 20, 20, 16, 11, 20, 20, 20, 14, 20, 20, 20, 11, 20, 20, 13, 20, 20, 18, 20, 10],
            [10, 11, 11, 11, 11, 20, 11, 20, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 11, 11, 11, 11, 11, 13, 10],
            [10, 20, 20, 20, 20, 20, 11, 20, 11, 20, 20, 20, 20, 14, 11, 20, 11, 20, 14, 20, 20, 14, 11, 14, 10],
            [10, 20, 11, 11, 11, 20, 11, 14, 11, 20, 11, 13, 11, 11, 11, 20, 11, 11, 11, 11, 20, 20, 11, 20, 10],
            [10, 20, 11, 16, 11, 20, 11, 20, 20, 20, 11, 20, 11, 20, 20, 20, 14, 20, 20, 14, 20, 20, 11, 20, 10],
            [10, 20, 11, 14, 11, 14, 11, 20, 11, 20, 11, 20, 11, 11, 11, 20, 11, 13, 11, 11, 11, 20, 20, 16, 10],
            [10, 20, 11, 20, 11, 20, 11, 14, 11, 20, 11, 20, 20, 14, 11, 20, 11, 20, 11, 14, 11, 20, 11, 20, 10],
            [10, 20, 11, 14, 11, 20, 11, 11, 11, 20, 11, 20, 11, 11, 11, 20, 11, 20, 11, 14, 11, 20, 11, 20, 17],
            [10, 20, 11, 20, 11, 20, 20, 20, 20, 20, 11, 20, 20, 14, 11, 20, 11, 14, 11, 20, 11, 14, 11, 20, 10],
            [10, 20, 11, 14, 11, 11, 11, 11, 11, 20, 11, 20, 11, 11, 11, 13, 11, 20, 11, 20, 11, 11, 11, 20, 10],
            [10, 20, 20, 20, 20, 20, 11, 20, 13, 20, 11, 20, 11, 14, 20, 20, 11, 16, 11, 20, 20, 20, 20, 20, 10],
            [10, 11, 11, 20, 11, 20, 11, 20, 11, 20, 11, 20, 11, 11, 11, 13, 11, 11, 11, 20, 11, 11, 11, 11, 10],
            [10, 14, 20, 14, 11, 14, 20, 14, 11, 14, 11, 14, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 14, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            ],

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 16, 20, 20, 20, 14, 14, 11, 14, 11, 14, 13, 20, 20, 20, 20, 14, 14, 20, 11, 14, 20, 20, 20, 12],
            [10, 20, 11, 11, 11, 11, 11, 11, 20, 11, 20, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 11, 11, 20, 10],
            [10, 14, 11, 14, 20, 20, 20, 13, 20, 11, 20, 11, 20, 11, 18, 16, 20, 11, 20, 11, 20, 13, 11, 20, 10],
            [10, 20, 11, 11, 11, 11, 20, 20, 20, 20, 20, 11, 20, 11, 14, 11, 20, 11, 20, 11, 20, 14, 11, 14, 10],
            [10, 20, 20, 20, 20, 20, 20, 11, 11, 11, 20, 11, 20, 11, 11, 11, 20, 11, 14, 11, 20, 11, 11, 11, 10],
            [10, 20, 11, 11, 11, 11, 14, 11, 14, 11, 14, 11, 14, 20, 20, 20, 20, 11, 20, 11, 20, 16, 20, 20, 10],
            [10, 20, 11, 20, 20, 20, 20, 11, 14, 11, 20, 11, 11, 11, 11, 11, 11, 11, 20, 14, 20, 20, 20, 20, 10],
            [10, 13, 11, 20, 11, 11, 11, 11, 20, 11, 20, 20, 20, 20, 20, 14, 20, 20, 20, 11, 11, 11, 11, 20, 10],
            [10, 20, 11, 20, 20, 14, 20, 20, 20, 11, 20, 11, 11, 11, 20, 11, 20, 11, 11, 11, 14, 13, 11, 20, 10],
            [10, 20, 11, 11, 20, 11, 11, 11, 11, 11, 20, 11, 14, 11, 20, 11, 20, 14, 11, 20, 20, 20, 11, 14, 10],
            [10, 14, 13, 11, 20, 20, 20, 20, 14, 11, 20, 20, 18, 11, 14, 11, 20, 18, 11, 20, 11, 20, 11, 20, 10],
            [10, 11, 11, 11, 20, 11, 20, 11, 11, 11, 11, 11, 11, 11, 20, 11, 11, 11, 11, 20, 11, 20, 11, 20, 10],
            [10, 15, 20, 20, 14, 11, 20, 20, 20, 14, 14, 20, 20, 16, 20, 20, 20, 14, 14, 20, 11, 20, 14, 20, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                
            ],

            //prettier-ignore
            [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 15, 20, 16, 14, 20, 20 ,20, 20, 20, 11, 14 ,20, 20, 20, 20, 20, 20, 11, 20, 20, 14, 11, 20, 10],
            [10, 14, 11, 11, 11, 20, 11, 20, 11, 13, 20, 20, 20, 20, 20, 20, 11, 14, 11, 20, 20, 20, 20, 20, 10],
            [10, 20, 20, 13, 11, 20, 11, 20, 11, 20, 11, 11, 11, 20, 14, 20, 11, 11, 11, 20, 11, 11, 20, 11, 10],
            [10, 20, 11, 11, 11, 14, 11, 20, 11, 14, 20, 14, 11, 20, 11, 20, 13, 20, 20, 20, 14, 11, 13, 14, 10],
            [10, 20, 14, 20, 20, 14, 11, 20, 11, 20, 20, 20, 14, 20, 11, 20, 11, 11, 20, 20, 11, 11, 20, 20, 10],
            [10, 11, 11, 20, 20, 13, 11, 20, 20, 20, 20, 20, 11, 20, 11, 20, 14, 11, 20, 20, 11, 20, 14, 13, 10],
            [10, 20, 11, 14, 11, 11, 11, 20, 20, 11, 20, 13, 11, 20, 11, 20, 20, 11, 18, 20, 11, 11, 11, 20, 10],
            [10, 14, 20, 20, 20, 20, 13, 20, 20, 11, 20, 20, 11, 20, 11, 11, 11, 11, 11, 20, 14, 20, 20, 20, 17],
            [10, 20, 11, 11, 11, 13, 20, 11, 20, 11, 14, 11, 20, 20, 20, 20, 20, 20, 20, 20, 11, 11, 14, 20, 10],
            [10, 20, 11, 14, 11, 14, 14, 11, 20, 11, 20, 11, 20, 11, 11, 11, 16, 20, 11, 20, 11, 14, 11, 20, 10],
            [10, 20, 11, 14, 20, 14, 14, 11, 20, 11, 20, 11, 14, 11, 14, 11, 20, 20, 11, 16, 11, 18, 11, 20, 10],
            [10, 20, 20, 14, 11, 11, 11, 11, 20, 11, 20, 11, 11, 11, 20, 11, 11, 20, 11, 14, 20, 13, 11, 20, 10],
            [10, 11, 11, 13, 20, 14, 14, 20, 20, 16, 20, 20, 16, 20, 18, 20, 14, 20, 11, 11, 11, 14, 20, 20, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            ],
    ];
}

//
public getGridForLevel(levelNumber: number): number[][] | /*varför behöver detta ens finnas?*/ undefined {
    if (levelNumber >= 1 && levelNumber <= this.numberGridLevels.length) {
        return this.numberGridLevels[levelNumber - 1];
    } else {
        return undefined;
    }
}

}