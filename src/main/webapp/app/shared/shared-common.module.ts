import { NgModule } from '@angular/core';

import { NatchiyarDemo4SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NatchiyarDemo4SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NatchiyarDemo4SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NatchiyarDemo4SharedCommonModule {}
