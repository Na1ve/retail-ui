import { AddressResponse, Fields } from '../../../../types';

export interface RemoveFiasDataTestCase {
  label: string;
  addressResponse: AddressResponse;
  fieldsToRemove: Fields[] | undefined;
  fieldsWithRemainedData: Fields[];
}

const CASE_01 = 'given no fields';
const CASE_02 = 'given array of fields';

export const removeFiasDataTestCases: RemoveFiasDataTestCase[] = [
  {
    label: CASE_01,
    addressResponse: {
      region: {
        name: 'Свердловская',
        abbreviation: 'обл',
        fiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        actuality: true,
        id: 'e76abf09-3148-42f6-85db-51edb09e72b7',
        level: 'Region',
        okato: '65000000000',
        ifnsfl: '6600',
        ifnsul: '6600',
        postalCode: '620000',
        code: '6600000000000',
      },
      city: {
        name: 'Екатеринбург',
        abbreviation: 'г',
        fiasId: '2763c110-cb8b-416a-9dac-ad28a55b4402',
        actuality: true,
        id: 'c2404c2a-0af3-440f-9320-9cbd160c4557',
        parentFiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        level: 'City',
        okato: '65401000000',
        oktmo: '65701000',
        code: '6600000100000',
      },
      street: {
        name: 'Малопрудная',
        abbreviation: 'ул',
        fiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        actuality: true,
        id: '599b198f-4519-4c61-969a-c1bec6902724',
        parentFiasId: '2763c110-cb8b-416a-9dac-ad28a55b4402',
        level: 'Street',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        postalCode: '620036',
        code: '66000001000155300',
      },
      house: {
        fiasId: '22ead39c-ddcc-4c46-951d-f958750810fd',
        parentFiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        id: '22ead39c-ddcc-4c46-951d-f958750810fd',
        structureStatus: 'Structure',
        estateStatus: 'None',
        postalCode: '620036',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        structureNumber: '5',
      },
    } as AddressResponse,
    fieldsToRemove: undefined,
    fieldsWithRemainedData: [],
  },
  {
    label: CASE_02,
    addressResponse: {
      region: {
        name: 'Свердловская',
        abbreviation: 'обл',
        fiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        actuality: true,
        id: 'e76abf09-3148-42f6-85db-51edb09e72b7',
        level: 'Region',
        okato: '65000000000',
        ifnsfl: '6600',
        ifnsul: '6600',
        postalCode: '620000',
        code: '6600000000000',
      },
      city: {
        name: 'Екатеринбург',
        abbreviation: 'г',
        fiasId: '2763c110-cb8b-416a-9dac-ad28a55b4402',
        actuality: true,
        id: 'c2404c2a-0af3-440f-9320-9cbd160c4557',
        parentFiasId: '92b30014-4d52-4e2e-892d-928142b924bf',
        level: 'City',
        okato: '65401000000',
        oktmo: '65701000',
        code: '6600000100000',
      },
      street: {
        name: 'Малопрудная',
        abbreviation: 'ул',
        fiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        actuality: true,
        id: '599b198f-4519-4c61-969a-c1bec6902724',
        parentFiasId: '2763c110-cb8b-416a-9dac-ad28a55b4402',
        level: 'Street',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        postalCode: '620036',
        code: '66000001000155300',
      },
      house: {
        fiasId: '22ead39c-ddcc-4c46-951d-f958750810fd',
        parentFiasId: '1de47f19-2de3-4d4b-9a3c-472fdc858975',
        id: '22ead39c-ddcc-4c46-951d-f958750810fd',
        structureStatus: 'Structure',
        estateStatus: 'None',
        postalCode: '620036',
        okato: '65401364000',
        oktmo: '65701000',
        ifnsfl: '6658',
        ifnsul: '6658',
        structureNumber: '5',
      },
    } as AddressResponse,
    fieldsToRemove: [Fields.street],
    fieldsWithRemainedData: [Fields.region, Fields.city, Fields.house],
  },
];
