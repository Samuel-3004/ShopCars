import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class Image {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  imgGalery: string;

  @ApiProperty()
  carId: string;

  constructor() {
    this.id = randomUUID();
  }
}
