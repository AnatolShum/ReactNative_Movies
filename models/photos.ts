interface Identifiable {
    id: String;
}

interface Equatable {
    equals(other: any): Boolean;
}

export class Photos implements Identifiable, Equatable {
    public path: String;

constructor(photosData) {
    this.path = photosData.file_path;
}

get id(): String {
    return this.path;
}

equals(other: any): Boolean {
    if (other instanceof Photos) {
        return this.path === other.path;
    }
    return false;
}
}