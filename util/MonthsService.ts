import { ptBR } from 'date-fns/locale';

const MonthsService = {
  execute(): string[] {
    const months = [];
    for (var i = 0; i < 12; i++) {
      const month = ptBR.localize.month(i);
      months.push(month[0].toUpperCase() + month.slice(1));
    }
    
    return months;
  }
}

export default MonthsService;