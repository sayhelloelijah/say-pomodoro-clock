import Timer from './timer';

const deadline = Timer.getFutureTime(25); // default 25 minutes
Timer.initializeClock(deadline);
