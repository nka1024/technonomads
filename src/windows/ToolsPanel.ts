import { BaseWindow } from "./BaseWindow";

/**
* @author       Kirill Nepomnyaschiy <nka1024@gmail.com>
* @copyright    nka1024
* @description  nomads
* @license      Apache 2.0
*/

export class ToolsPanel extends BaseWindow {
    // static
    static innerHtml:string;

    // public
    public positionText:HTMLElement;
    public statusText:HTMLElement;
    public playButton:HTMLInputElement;
    public eraseButton:HTMLInputElement;
    public brushButton:HTMLInputElement;
    
    constructor() {
        super();

        this.positionText = this.element.querySelector(".text_cordinates");
        this.statusText = this.element.querySelector(".text_status");
        this.playButton = this.element.querySelector(".play_button");
        this.brushButton = this.element.querySelector(".tools_button_brush");
        this.eraseButton = this.element.querySelector(".tools_button_erase");
    }

    // Window HTML properties
    protected getWindowName(): string { return "tools_panel" }
    protected getInnerHTML(): string  { return ToolsPanel.innerHtml }
    static initialize() {
        ToolsPanel.innerHtml = BaseWindow.getPrefab(".tools_panel_prefab").innerHTML;
    }


}