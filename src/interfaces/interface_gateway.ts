import { ApiProperty } from "@nestjs/swagger"

export class  DadosCliente {
    @ApiProperty()
    id:number
    @ApiProperty()
    depositante:string
    @ApiProperty()
    numero_conta:number
    @ApiProperty()
    valor_pix:number
}