export = Command;
declare class Command {
    constructor(room: object, player: object);
    room: object;
    player: object;
    kick(reason: string): void;
    ban(reason: string): void;
}
