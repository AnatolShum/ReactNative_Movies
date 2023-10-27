interface Identifiable {
    id: String;
}

interface Equatable {
    equals(other: any): Boolean;
}

type ConstructorParams = {
    file_path: String;
};

export class Photos implements Identifiable, Equatable {
    public path: String;

constructor({
    file_path,
}: ConstructorParams) {
    this.path = file_path;
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