import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
    private numberOfGeneratIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix) { 
            throw Error('Prefix can not be empty')
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratIds++;
        return `${prefix}-${uniqueId}`
    }

    public getNumberOfGeneratUniqueIds(): number {
        return this.numberOfGeneratIds;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}