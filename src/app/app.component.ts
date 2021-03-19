import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-interceptor';

  constructor(private usuarioServicio:UsuariosService){
    usuarioServicio.obtenerUsuario()
      .subscribe(resp => console.log(resp))
  }
}
