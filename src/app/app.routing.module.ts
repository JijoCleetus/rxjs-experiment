import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from 'src/app/promise/promise.component';
import { EventComponent } from 'src/app/event/event.component';
import { IntervalComponent } from 'src/app/interval/interval.component';

const routes: Routes = [
    {
        path: '',
        component: PromiseComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'interval',
        component: IntervalComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }








