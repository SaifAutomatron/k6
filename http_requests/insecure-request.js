import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: true, // Do not verify the server's TLS certificate
  };

export default function () {
    http.get('https://self-signed.badssl.com/');
    sleep(1);
}
