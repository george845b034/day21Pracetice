/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should return a static value of george', inject([UserService], (service: UserService) => {
    expect(service.getCurrentUser()).toBe('george');
  }));
});
