import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}
  //tiene que ser public pq lo vas a unir con el template y angular solo une con propiedades de componentes publicas

  ngOnInit() {}
}
