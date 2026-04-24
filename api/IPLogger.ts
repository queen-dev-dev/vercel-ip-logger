import { ipAddress } from '@vercel/functions'

export default {
    fetch(request) {
        const ip = ipAddress(request);
        console.log(ip)
        return new Response({
            ip: "silly"
        })
    }
}