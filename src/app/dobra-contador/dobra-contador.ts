import { Component, computed, inject } from '@angular/core';
import { ContadorService } from '../contador-service';

@Component({
  imports: [],
  selector: 'app-dobra-contador',
  styleUrl: './dobra-contador.scss',
  templateUrl: './dobra-contador.html',
})
export class DobraContador {
  readonly #constService = inject(ContadorService)

  protected readonly dobro = computed(() => {
    return this.#constService.contador() * 2
  })
}
