import { TestBed, inject } from '@angular/core/testing';

import { ToolsService } from './tools.service';
import { HubService } from './hub.service';


// export class HubServiceMockClass {
//   private hubConnection: HubConnection;
//   registerMethods(methodName, callback) {
//     this.hubConnection.on(methodName, callback);
//   }
// }


describe('ToolsService', () => {
  let service: ToolsService;
  let hubService: HubService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToolsService,
        HubService
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(ToolsService);
    hubService = TestBed.get(HubService);
  });

  it('should call hubService invokeCommand', () => {
    spyOn(hubService, 'invokeCommand');

    const mockCommand = {};

    service.sendCommand(mockCommand);

    expect(hubService.invokeCommand).toHaveBeenCalled();

    expect(hubService.invokeCommand).toHaveBeenCalledWith('SendCommand', mockCommand);
  });


});
