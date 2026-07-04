import { formatDistanceToNow } from 'date-fns';

function fromatTime(date){
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export default fromatTime;