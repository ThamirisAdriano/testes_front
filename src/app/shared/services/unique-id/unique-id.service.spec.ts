//  describe('O artefato a ser testado', () => {
//      it('Something should happen when... ', () => {})
//  })

import { UniqueIdService } from "./unique-id.service"

//     })
//     it('Segunda condição', () => {

//     })

//estrutura que o jasmine orienta
// algo deve fazer algo quando bla bla bla
// })
describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService()
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue()
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplicate Ids when called multiple times`, () => {
        const ids = new Set();
        for (let i = 0; i < 50 ; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }
        expect(ids.size).toBe(50);
    });

    //teste de função que retorna o número de ids gerados quando chamada

    it(`#${UniqueIdService.prototype.getNumberOfGeneratUniqueIds.name} 
    should return the number of generateIds when called`, () =>{
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGeneratUniqueIds()).toBe(2);
    })

    //quando chamamos um método e queremos identificar se ele está trazendo uma exceção, devemos trazê-lo com uma função

    it(`#${UniqueIdService.prototype.getNumberOfGeneratUniqueIds.name} 
    should throw when called with empty`, () => {
        const emptyValues = [null, undefined, '', '0', '1'];
        emptyValues.forEach(emptyValue => {
            expect(() => service.generateUniqueIdWithPrefix(emptyValue))
            .withContext(`Empty value: ${emptyValue}`)
            .toThrow();
        })
    })
})