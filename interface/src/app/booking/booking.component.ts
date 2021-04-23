import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hotels: any[] = [];
  loading = true;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query:gql `{getBooking{hotel_name street city postal_code}}`
    })
    .subscribe(
      ({data,loading}) =>{
        this.hotels = data && data.hotels;
        this.loading = loading;
      }
    );
  }
}