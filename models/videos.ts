interface Identifiable {
    id: String;
}

interface Equatable {
    equals(other: any): Boolean;
}

type ConstructorParams = {
    key: String;
    site: String;
    type: String;
    official: Boolean;
};

export class Videos implements Identifiable, Equatable {
    public key: String;
    public site: String;
    public type: String;
    public official: Boolean;

    constructor({
        key,
        site,
        type,
        official,
}: ConstructorParams) {
    this.key = key;
    this.site = site;
    this.type = type;
    this.official = official;
}

get id(): String {
    return this.key;
}

equals(other: any): Boolean {
    if (other instanceof Videos) {
        return this.key === other.key;
    }
    return false;
}
}