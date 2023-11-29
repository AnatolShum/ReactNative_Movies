interface Identifiable {
    id: String;
}

interface Equatable {
    equals(other: any): Boolean;
}

export class Videos implements Identifiable, Equatable {
    public key: String;
    public site: String;
    public type: String;
    public official: Boolean;

    constructor(videosData) {
    this.key = videosData.key;
    this.site = videosData.site;
    this.type = videosData.type;
    this.official = videosData.official;
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