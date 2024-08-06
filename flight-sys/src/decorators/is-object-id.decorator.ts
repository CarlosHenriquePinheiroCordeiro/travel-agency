import { registerDecorator } from 'class-validator';
import { isValidObjectId } from 'mongoose';

export function IsObjectId() {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isCustom',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any) {
          return isValidObjectId(value);
        },
        defaultMessage() {
          return `Property ${propertyName} has a non valid value`;
        },
      },
    });
  };
}
