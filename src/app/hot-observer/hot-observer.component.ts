import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cold-observer',
  templateUrl: './hot-observer.component.html',
  styleUrls: ['./hot-observer.component.sass']
})
export class HotObserverComponent implements OnInit {

  chatStream = new Subject()

  ngOnInit() {
    this.chatManagement()
  }

  chatManagement() {
    // Usuário 1 envia uma mensagem

    // Usuário 2 se inscreve para receber mensagens em tempo real
    this.chatStream.subscribe(message => {
      console.log(message);
    });

    // Usuário 1 envia uma mensagem
    this.chatStream.next({ user: 'Usuário 1', message: 'Olá a todos!', active: true });

    // Usuário 3 envia uma mensagem
    this.chatStream.next({ user: 'Usuário 3', message: 'Olá pessoal!' });
  }
}
