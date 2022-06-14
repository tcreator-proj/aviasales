import AviaTicket from "../aviaticket/aviaticket";

export default class AviaTicketList {
    private aviaTicketList: HTMLElement;
    
    constructor() {
        this.aviaTicketList = document.querySelector('.aviaticket__list');
    }

    addTicket(ticket: AviaTicket): void {
        this.aviaTicketList.appendChild(ticket.node);
    }

    addText(ticket: AviaTicket): void {
        this.aviaTicketList.insertAdjacentHTML('beforeend', ticket.html);
    }
}