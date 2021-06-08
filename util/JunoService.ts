interface JunoProps {
  cardNumber: string;
  holderName: string;
  securityCode: string;
  expirationMonth: string;
  expirationYear: string;
}

const JunoService = {
  execute(card: JunoProps): Promise<string> {
    let checkout = new DirectCheckout('A30F934C2A5A050EF325382103132761FE62225D97C615A468CEE4951EAD0B99', false);
    let cardData = card;

    return new Promise((resolve, reject) => {
      checkout.getCardHash(cardData,
        (data) => resolve(data),
        (error) => reject(error)
      );
    });
  }
}

export default JunoService;