import express from 'express';
import httpProxy from 'http-proxy'
import dotenv  from 'dotenv'


const app=express();



dotenv.config()

const BASE_PATH=`${process.env.BASE_PATH}`
const PORT=process.env.PORT;


const proxy= httpProxy.createProxy();

app.use((req,res)=>{
    const hostname=req.hostname;
    const subdomain = hostname.split('.')[0];
    const resolveTo = `${BASE_PATH}/${subdomain}`;

    return proxy.web(req, res, { target: resolveTo, changeOrigin: true })
})

proxy.on('proxyReq', (proxyReq, req, res) => {
    const url = req.url;
    if (url === '/')
        proxyReq.path += 'index.html'

})

app.listen(PORT,()=>{
    console.log(`Reverse proxy running on 8000 port`);
    
})