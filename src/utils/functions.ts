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
    const days = differenceInCalendarDays(date, new Date('2021-09-27'));
    const time = formatDistance(subDays(new Date(), days), date, {
        addSuffix: true,
        locale: pt,
    });
    return time.replace('aproximadamente ', '');
};
