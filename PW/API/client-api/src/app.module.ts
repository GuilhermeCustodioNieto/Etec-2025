import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { ProdutosModule } from './produtos/produtos.module';
import { StatusModule } from './status/status.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { ItemPedidoModule } from './item-pedido/item-pedido.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORTA_BD || '3306', 10),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATA_BASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RouterModule.register([
      {
        path: '/firma/1.0.1',
        children: [
          {
            path: '/',
            module: CategoriaModule,
          },
          {
            path: '/',
            module: ProdutosModule,
          },
          {
            path: '/',
            module: StatusModule,
          },
          {
            path: '/',
            module: EnderecoModule,
          },
          {
            path: '/',
            module: ClienteModule,
          },
          {
            path: '/',
            module: PedidoModule,
          },
          {
            path: '/',
            module: ItemPedidoModule,
          },
        ],
      },
    ]),

    CategoriaModule,
    ProdutosModule,
    StatusModule,
    EnderecoModule,
    ClienteModule,
    PedidoModule,
    ItemPedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
