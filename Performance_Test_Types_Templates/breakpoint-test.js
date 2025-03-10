import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h', // keep increasing users till breakpoint is reached. continuous monitoring is needned to find the breakpoint.
            target: 10000
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}