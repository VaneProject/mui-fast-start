declare global {
    interface String {
        isEmpty(): boolean;
    }
}

String.prototype.isEmpty = function (): boolean {
    return this.length === 0 || !this.trim();
}
