export = Environment;
declare function Environment(): void;
declare class Environment {
    _ctrlChannel: ControlChannel;
    alert(message: string): any;
    prompt(
        label: string,
        options: any[],
        opt_verticalAlign?: boolean,
        opt_defaultOptionIndex?: number,
        opt_escapeIndex?: number
    ): any;
    confirm(msg: string, opt_negativeDefaultAnswer?: boolean): boolean;
    exiting: boolean;
    exit(uri?: string): void;
}
declare namespace Environment {
    function getInstance(): Environment;
}
import ControlChannel = require('../ifp/ControlChannel.js');
