import "./aviaticket.scss";

export default class AviaTicket {
    private aviaTicket: HTMLElement;
    private textNode: string;
    
    constructor(price: number) {
        this.aviaTicket = this.makeNode(this.makeHTML(price));
        this.textNode = this.makeHTML(price);
        console.log(this.aviaTicket)
    }

    get node() {
        return this.aviaTicket;
    }

    get html() {
      return this.textNode;
    }

    private makeNode(text: string): HTMLElement {
        const aviaticket: HTMLElement = document.createElement("DIV");
        aviaticket.innerHTML = text;
        return <HTMLElement> aviaticket.firstElementChild;
    }

    private makeHTML(price: number): string {
        return `
        <div class="aviaticket card my-3 p-3">
                  <div class="row">
                    <div class="col">
                      <h4 class="aviaticket-price text-primary">${price}</h4>
                    </div>
                    <div class="col aviaticket-logo d-flex justify-content-end"><div>
                  </div>
                  <div class="row">
                    <div class="col aviaticket-from">
                      <div class="aviaticket-from-sign text-secondary text-uppercase">mow - nkt</div>
                      <div class="aviaticket-from-time text-dark">10:45 - 08:00</div>
                    </div>
                    <div class="col aviaticket-traveltime">
                      <div class="aviaticket-traveltime-head text-secondary text-uppercase">в пути</div>
                      <div class="aviaticket-traveltime-is text-dark">3ч</div>
                    </div>
                    <div class="col aviaticket-transfer">
                      <div class="aviaticket-transfer-describe text-secondary text-uppercase">2 пересадки</div>
                      <div class="aviaticket-transfer-data text-dark text-uppercase">
                        <div class="row">
                          <div class="col text-uppercase">nkj</div>
                          <div class="col text-uppercase">pmb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `
    }
}