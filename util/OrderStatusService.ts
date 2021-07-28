const OrderStatusService = {
  execute(status: string): string {
    switch(status) {
      case 'processing_error':
        return 'Erro no processamento';
      case 'waiting_payment':
        return 'Aguardando o pagamento';
      case 'payment_accepted':
        return 'Pagamento aceito';
      case 'payment_denied':
        return 'Pagamento negado';
      case 'finished':
        return 'Finalizado';
      default:
        return 'Pedido em processamento';
    }
  }
}

export default OrderStatusService;