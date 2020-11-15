import { TestBed } from '@angular/core/testing';

import { Exercice6Service } from './exercice6.service';
import {Exercice5Service} from './exercice5.service';
import {ParsingService} from './parsing/parsing.service';
import {instance, mock} from 'ts-mockito';

describe('Exercice6Service', () => {
  let exercice6Service: Exercice6Service;
  let mockParsingService: ParsingService;
  let parsingService: ParsingService;

  beforeEach(() => {
    mockParsingService = mock(ParsingService);
    parsingService = instance(mockParsingService);
    exercice6Service = new Exercice6Service(parsingService);
  });


});
