import { Command } from './Command';
import { CommandGroup } from './CommandGroup';
export declare class UI {
    private menuElement;
    private inputElement;
    private groupsUlElement;
    private escapeEventListener;
    private inputSubscribers;
    private openSubscribers;
    private runSubscribers;
    private selectSubscribers;
    constructor();
    private static createMenuElement();
    private static createInputElement();
    private static createGroupsUlElement();
    private static createGroupLiElement(group);
    private static createResultsUlElement();
    private static createResultLiElement(command);
    setGroups(groups: Array<CommandGroup>): void;
    addGroup(group: CommandGroup): void;
    removeAllGroups(): void;
    openMenu(): void;
    closeMenu(): void;
    openMenuIfNoActiveInputs(): void;
    selectCommand(command: Command): void;
    deselectCommand(command: Command): void;
    onKeydown(event: KeyboardEvent): void;
    onInput(subscriber: Function): void;
    onOpen(subscriber: Function): void;
    onSelect(subscriber: Function): void;
    onRun(subscriber: Function): void;
    emitRun(): void;
    dotEventListener(event: KeyboardEvent): void;
}
export declare const ui: UI;
