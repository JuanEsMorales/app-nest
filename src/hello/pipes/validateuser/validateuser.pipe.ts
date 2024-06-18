import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    
    const ageNumber = parseInt(value.age, 10);
    if (isNaN(ageNumber) || ageNumber < 18) {
      throw new HttpException('Age must be a number and greater than 18', HttpStatus.BAD_REQUEST);
    }


    return {...value, age: ageNumber};
  }
}
