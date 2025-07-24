import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-netmap',
  imports: [ CommonModule, FormsModule],
  templateUrl: './netmap.component.html',
  styleUrl: './netmap.component.css'
})
export class NetmapComponent{
  cities: City[] = [
    { name: "Abuja", x: 300, y: 200, region: "central", population: 1235880, notableFeature: "Capital city" },
    { name: "Kaduna", x: 280, y: 160, region: "north", population: 1682500 },
    { name: "Kano", x: 350, y: 130, region: "north", population: 2994000 },
    { name: "Lagos", x: 150, y: 320, region: "south", population: 14862000, notableFeature: "Commercial hub" },
    { name: "Port Harcourt", x: 230, y: 350, region: "south", population: 1865000 },
    { name: "Ibadan", x: 180, y: 280, region: "south", population: 3160000 },
    { name: "Benin City", x: 200, y: 300, region: "south", population: 1491000 },
    { name: "Maiduguri", x: 420, y: 110, region: "north", population: 1197000 },
    { name: "Zaria", x: 290, y: 150, region: "north", population: 975000 },
    { name: "Aba", x: 270, y: 310, region: "south", population: 1139000 },
    { name: "Jos", x: 300, y: 180, region: "central", population: 925000 },
    { name: "Enugu", x: 280, y: 270, region: "south", population: 820000 },
    { name: "Sokoto", x: 180, y: 90, region: "north", population: 732000 },
    { name: "Calabar", x: 250, y: 380, region: "south", population: 461800 },
    { name: "Owerri", x: 240, y: 300, region: "south", population: 540000 },
    { name: "Abeokuta", x: 160, y: 290, region: "south", population: 888000 },
    { name: "Uyo", x: 240, y: 360, region: "south", population: 436600 },
    { name: "Onitsha", x: 260, y: 290, region: "south", population: 1483000 },
    { name: "Warri", x: 210, y: 330, region: "south", population: 557400 },
    { name: "Gombe", x: 370, y: 150, region: "north", population: 460900 }
  ];

  neighboringCountries = [
    { name: "Benin", x: 100, y: 250, color: "#9CCC65" },
    { name: "Niger", x: 250, y: 50, color: "#81D4FA" },
    { name: "Chad", x: 400, y: 100, color: "#CE93D8" },
    { name: "Cameroon", x: 350, y: 300, color: "#FFAB91" }
  ];

  selectedCity: City | null = null;
  hoveredCity: City | null = null;
  regionFilter: string = 'all';
  showNeighbors: boolean = true;
  showBackground: boolean = true;

  selectCity(city: City) {
    this.selectedCity = city;
  }

  clearSelection() {
    this.selectedCity = null;
  }

  get filteredCities() {
    if (this.regionFilter === 'all') {
      return this.cities;
    }
    return this.cities.filter(city => city.region === this.regionFilter);
  }
}