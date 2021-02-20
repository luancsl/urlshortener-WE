import { RequiredFieldValidation } from './requiredFieldValidation'
import { MissingParamError } from '@src/delivery/presenter/error';
import faker from "faker";


const field = faker.random.word()

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(field)
}

describe('RequiredField Validation', () => {
  test('Deve retornar um MissingParamError se a validação falhar', () => {
    const sut = makeSut()
    const error = sut.validate({ invalidField: faker.random.word() })
    expect(error).toEqual(new MissingParamError(field))
  })

  test('Não deve retornar validação bem-sucedida', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
