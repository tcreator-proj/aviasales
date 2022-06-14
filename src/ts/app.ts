import './components/aviaticket-list/aviaticket-list';
import AviaTicketList from './components/aviaticket-list/aviaticket-list';
import './components/aviaticket/aviaticket';
import AviaTicket from './components/aviaticket/aviaticket';

console.log("Запуск");

const aviaTicket: AviaTicket = new AviaTicket(500);
const aviaTicket2: AviaTicket = new AviaTicket(700);

const ticketList: AviaTicketList = new AviaTicketList();

ticketList.addText(aviaTicket);

ticketList.addTicket(aviaTicket2);