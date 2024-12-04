import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { DadosCliente } from './interfaces/interface_gateway';

@Controller()
export class AppController {
  private clienteAdminBackend: ClientProxy

  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
          urls: ['amqp://admin:123456@10.136.62.181:5672/pix'], //"pix" nome do virtual host
          queue: 'filaPix' //"filaPix" nome da fila
      }
    })
  }

  @Get()
  testeRMQ(){
    return this.clienteAdminBackend.emit("teste","chamando teste")
  }

  @Post()
    enviarPix(@Body() corpo:DadosCliente){
      return this.clienteAdminBackend.emit("transferPix", corpo) 
    }
}

