export = Command;
declare class Command {
    constructor(room: any, config: any);
    config: any;
    room: any;
    createCommand(message: any, callback: any): void;
}
