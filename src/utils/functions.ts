import { differenceInCalendarDays, formatDistance, subDays } from 'date-fns';
import { pt } from 'date-fns/locale';

export const formatDateForDisplay = (
    date: Date | number | undefined,
): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    return new Intl.DateTimeFormat('pt-BR', options)
        .format(date)
        .replace('.', '')
        .replace(' de ', '/')
        .replace('. ', ' as ');
};

export const formatDateInDays = (date: Date): string => {
    const days = differenceInCalendarDays(new Date(), date);
    const time = formatDistance(subDays(new Date(), days), date, {
        addSuffix: true,
        locale: pt,
    });
    return days > 0 ? `Ha ${days} dias` : time.replace('aproximadamente ', '');
};

export function mascaraTelephone(valor: string): string {
    return valor?.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
}
