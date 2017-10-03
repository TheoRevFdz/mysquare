import { Component } from "@angular/core";
import { SelectItem } from "primeng/primeng";

@Component({
  selector: "app-lugares",
  templateUrl: "./lugares.component.html"
})
export class LugaresComponent {
  title = "MySquare";

  lat: number = -16.4331647;
  lng: number = -71.5427211;

  lugares: any = [
    {
      plan: "pagado",
      cercania: 1,
      distancia: 1,
      active: true,
      nombre: "Florería la Gardenia"
    },
    {
      plan: "gratuito",
      cercania: 1,
      distancia: 1.8,
      active: true,
      nombre: "Donas la pasadita"
    },
    {
      plan: "gratuito",
      cercania: 2,
      distancia: 5,
      active: true,
      nombre: "Veterinaria Huellitas Felices"
    },
    {
      plan: "gratuito",
      cercania: 3,
      distancia: 10,
      active: false,
      nombre: "Sushi Suhiroll"
    },
    {
      plan: "pagado",
      cercania: 3,
      distancia: 35,
      active: true,
      nombre: "Hotel la Gracia"
    },
    {
      plan: "gratuito",
      cercania: 3,
      distancia: 120,
      active: false,
      nombre: "Zapatería el Clavo"
    }
  ];
}
