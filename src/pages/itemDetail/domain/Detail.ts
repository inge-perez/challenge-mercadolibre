export class Detail {
    id: string | undefined;;
    title: string | undefined;
    thumbnail: string | undefined;
    condition: string | undefined;

    constructor(item: Partial<Detail> = {}) {
        Object.assign(this, item);
    }

    static create(item: Partial<Detail> = {}) {
        return new Detail(item);
    }
}