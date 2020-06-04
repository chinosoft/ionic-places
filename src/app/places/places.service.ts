import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Eiffel Tower",
      imageUrl:
        "https://www.ngenespanol.com/wp-content/uploads/2018/08/Fotografiar-la-Torre-Eiffel-de-noche-est%C3%A1-prohibido-770x413.jpg",
      comments: [
        "awesome place",
        "mosomenos el lugarcito",
        "genial nunca visto",
      ],
    },
    {
      id: "2",
      title: "Statue of Liberty",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/800px-Statue_of_Liberty_7.jpg",
      comments: ["small place", "tremendus lugarcito", "estatua comun"],
    },
    {
      id: "3",
      title: "Cataratas of Iguazu",
      imageUrl:
        "http://www.alas2017.com/wp-content/uploads/2017/09/cataratas.png",
      comments: ["alta cataranga", "tremendus point", "temo, temojas"],
    },
    {
      id: "4",
      title: "Cancha de River",
      imageUrl:
        "https://images.daznservices.com/di/library/Goal_Argentina/86/5e/estadio-monumental-river-plate_15f3ygjfxe9ct1gtq50322fkgx.jpg?t=172937880&quality=60&w=1600",
      comments: [],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }
  addPlace(title: string, imageUrl: string) {
    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + "",
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place =>{
      return place.id !==placeId
    })
  }
}
