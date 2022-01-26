import {forEach} from './foreach';
;


describe(
    'foreach',
    () => {
        test(
            'the function is called ok',
            ()=>{
                const mockCallback = jest.fn(x=>x);
                forEach([0, 1], mockCallback);
                // se ha llamado dos veces
                expect(mockCallback.mock.calls.length).toBe(2);
                // el primer argumento es 0
                expect(mockCallback.mock.calls[0][0]).toBe(0);
                // el segundo argumento es 1
                expect(mockCallback.mock.calls[1][0]).toBe(1);
                // no hay tercera llamada
                expect(mockCallback.mock.calls[2]).toBeUndefined();
                // la primera llamada devuelve 0
                expect(mockCallback.mock.results[0].value).toBe(0);
                // la segunda llamada devuelve 1
                expect(mockCallback.mock.results[1].value).toBe(1);

                

            }

        )
    }
)